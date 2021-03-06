class TGMapWater {
	constructor(tg, mapUtil) {
		this.tg = tg;
		this.mapUtil = mapUtil;
		this.isDisabled = false;
		this.display = false;
		this.layer = null;

		this.simplify = false;
  	this.dispNodeLayer = false;
		this.nodeLayer = null;

		this.waterObjects = {};
		this.newWaterObjects = [];
		this.dispWaterObjects = [];
  	this.timerGetWaterData = null;
  	this.timerFinishGettingWaterData = null;
  	this.dispLayers = [];
  	this.rdpThreshold = this.tg.opt.constant.rdpThreshold.water;
  	this.timeInterval = 0;
  	this.timeIntervalArray = [];

  	for(let zoom = this.tg.opt.minZoom; zoom <= this.tg.opt.maxZoom; zoom++) {
  		this.waterObjects[zoom] = [];
  	}
	}

	turn(tf) {
		this.display = tf;
	}

	disabled(tf) {
		this.isDisabled = tf;
	}
	
	render() {
		if (this.isDisabled||(!this.display)) this.clearLayers();
		else this.updateLayer();
	}

	discard() {
		this.clearLayers();
	}

	init() {
		const waterSource = new ol.source.VectorTile({
		  format: new ol.format.TopoJSON(),
		  projection: 'EPSG:3857',
		  //preload: 1,
		  tileGrid: new ol.tilegrid.createXYZ({maxZoom: 22}),
		  url: 'https://tile.mapzen.com/mapzen/vector/v1/water/{z}/{x}/{y}.topojson?' 
		    + 'api_key=vector-tiles-c1X4vZE'
		})

		this.mapUtil.addLayer(new ol.layer.VectorTile({
		  source: waterSource,
		  style: this.addToWaterObject.bind(this)
		}))
	}

	addToWaterObject(feature, resolution) {
		if (this.timerGetWaterData) clearTimeout(this.timerGetWaterData);
		this.timerGetWaterData = 
				setTimeout(
						this.processNewWaterObjects.bind(this), 
						this.tg.opt.constant.timeToWaitForGettingWaterData);

		if (this.tg.map.timerCheckGridSplitInTgMap) {
			clearTimeout(this.tg.map.timerCheckGridSplitInTgMap);
		}

		const geoType = feature.getGeometry().getType();
		const zoom = this.tg.map.currentZoom;

		// ignores LineString, Point, ...
		if ((geoType == 'Polygon')||(geoType == 'MultiPolygon')) {

			const kind = feature.get('kind');

			// ignores dock, swimming_pool
			// so water, ocean, riverbank, and lake are considered.
			if ((kind === 'dock')||(kind === 'swimming_pool')) return null;

			feature.getGeometry().transform('EPSG:3857', 'EPSG:4326');

			let coords = feature.getGeometry().getCoordinates();
			coords.minZoom = feature.get('min_zoom');
			

			//console.log(coords.minZoom + ' : ' + kind);

			//const lenCoords = coords.length;

			if (geoType === 'Polygon') {

				if ((this.simplify)&&(this.tg.map.simplify)) {
					coords = this.tg.util.RDPSimp2DLoop(coords, this.rdpThreshold);
				}

				for(let i = 0; i < coords.length; i++) {
					for(let j = 0; j < coords[i].length; j++) {
						coords[i][j].node = new Node(coords[i][j][1], coords[i][j][0]);
					}
				}
				
				this.waterObjects[zoom].push(coords);
				this.newWaterObjects.push(coords);
				this.dispWaterObjects.push(coords);
			}
			else if (geoType == 'MultiPolygon') {

				if ((this.simplify)&&(this.tg.map.simplify)) {
					coords = this.tg.util.RDPSimp3DLoop(coords, this.rdpThreshold);
				}

				for(let i = 0; i < coords.length; i++) {
					for(let j = 0; j < coords[i].length; j++) {
						for(let k = 0; k < coords[i][j].length; k++) {
							coords[i][j][k].node = new Node(coords[i][j][k][1], coords[i][j][k][0]);
						}
					}
				}

				this.waterObjects[zoom].push(coords);
				this.newWaterObjects.push(coords);
				this.dispWaterObjects.push(coords);
			}			
		}
		return null;
	}

	processNewWaterObjects() {
		
		console.log('.');

		if (this.timerFinishGettingWaterData) {
			clearTimeout(this.timerFinishGettingWaterData);
		}
		this.timerFinishGettingWaterData = 
				setTimeout(
						this.finishGettingWaterObjects.bind(this), 
						this.tg.opt.constant.timeToWaitForFinishGettingWaterData);

		this.tg.map.setDataInfo('numWaterLoading', 'increase');
		this.tg.map.setTime('waterLoading', 'end', (new Date()).getTime());

		if (tg.map.currentMode === 'EM') {
			this.addNewLayer();
		}
		this.newWaterObjects = [];

		const cur = (new Date()).getTime();
		if (this.timeInterval !== 0) {
			const dif = (cur - this.timeInterval);
			this.timeIntervalArray.push(dif)
			//console.log('### elapsed: ' + dif + ' ms');
		}
		this.timeInterval = cur;

	}

	calDispWater() {
		const currentZoom = this.tg.map.currentZoom;
		const opt = this.tg.opt;
		const top = opt.box.top + opt.variable.latMargin;
		const bottom = opt.box.bottom - opt.variable.latMargin;
		const right = opt.box.right + opt.variable.lngMargin;
		const left = opt.box.left - opt.variable.lngMargin;

		this.dispWaterObjects = [];

		for(let water of this.waterObjects[currentZoom]) {
			if (currentZoom < water.minZoom) {
				continue;
			}
			
			let isIn = false;
			if (water[0].length === 0) continue;

			if (water[0][0].node) { // Polygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						const lat = water[i][j].node.original.lat;
						const lng = water[i][j].node.original.lng;

						if ((lat < top) && (lat > bottom) && (lng < right) && (lng > left)) {
							this.dispWaterObjects.push(water);
							isIn = true;
							break;
						}
					}
					if (isIn) break;
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						for(let k = 0; k < water[i][j].length; k++) {
							const lat = water[i][j][k].node.original.lat;
							const lng = water[i][j][k].node.original.lng;
							if ((lat < top) && (lat > bottom) && (lng < right) && (lng > left)) {
								this.dispWaterObjects.push(water);
								isIn = true;
								break;
							}
						}
						if (isIn) break;
					}
					if (isIn) break;
				}
			}
		}

		//console.log('/# of water : ' + this.waterObjects.length);
		//console.log('/# of disp water: ' + this.dispWaterObjects.length);
	}

	updateDispWater() {
		for(let water of this.dispWaterObjects) {
			if (water[0].length === 0) continue;

			if (water[0][0].node) { // Polygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						water[i][j][0] = water[i][j].node.disp.lng;
						water[i][j][1]	= water[i][j].node.disp.lat;
					}
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						for(let k = 0; k < water[i][j].length; k++) {
							water[i][j][k][0] = water[i][j][k].node.disp.lng;
							water[i][j][k][1]	= water[i][j][k].node.disp.lat;
						}
					}
				}
			}
			else {
				console.log('not known geotype in createDispRoas()');
			}
		}
	}

	addNewLayer() {
		let arr = [];
		const styleFunc = this.mapUtil.polygonStyleFunc(this.tg.opt.color.water);

		for(let water of this.newWaterObjects) {

			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;


			if (water[0][0].node) { // Polygon
				this.mapUtil.addFeatureInFeatures(
					arr, new ol.geom.Polygon(water), styleFunc);
			}
			else if (water[0][0][0].node) { // MultiPolygon
				this.mapUtil.addFeatureInFeatures(
					arr, new ol.geom.MultiPolygon(water), styleFunc);
			}
		}

		const layer = this.mapUtil.olVectorFromFeatures(arr);
		layer.setZIndex(this.tg.opt.z.water);
		this.mapUtil.addLayer(layer);
		this.dispLayers.push(layer);
		
		//console.log('+ new water layer: ' + arr.length);
		if (this.dispNodeLayer) this.addNewNodeLayer();
	}

	//
	updateLayer() {
		this.clearLayers();
		this.updateDispWater();

		let arr = [];
		const styleFunc = this.mapUtil.polygonStyleFunc(this.tg.opt.color.water);

		for(let water of this.dispWaterObjects) {
			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				this.mapUtil.addFeatureInFeatures(
					arr, new ol.geom.Polygon(water), styleFunc);
			}
			else if (water[0][0][0].node) { // MultiPolygon
				this.mapUtil.addFeatureInFeatures(
					arr, new ol.geom.MultiPolygon(water), styleFunc);
			}
		}
		this.layer = this.mapUtil.olVectorFromFeatures(arr);
		this.layer.setZIndex(this.tg.opt.z.water);
		this.mapUtil.addLayer(this.layer);
		this.dispLayers.push(this.layer);

		if (this.dispNodeLayer) this.addNodeLayer();
	}

	removeLayer() {
		this.mapUtil.removeLayer(this.layer);
	}

	clearLayers() {
		for(let layer of this.dispLayers) {
			this.mapUtil.removeLayer(layer);
		}
	}

	calRealNodes() {
		this.calModifiedNodes('real');
	}

	calTargetNodes() {
		this.calModifiedNodes('target');
	}

	calModifiedNodes(kind) {
		let transformFuncName;
		if (kind === 'real') transformFuncName = 'transformReal';
		else if (kind === 'target') transformFuncName = 'transformTarget';
		else throw 'ERROR in calModifiedNodes()';

		const transform = this.tg.graph[transformFuncName].bind(this.tg.graph);

		for(let water of this.dispWaterObjects) {
			let modified;

			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						modified = 
							transform(water[i][j].node.original.lat, water[i][j].node.original.lng);
						water[i][j].node[kind].lat = modified.lat;
						water[i][j].node[kind].lng = modified.lng;
					}
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						for(let k = 0; k < water[i][j].length; k++) {
							modified = transform(
									water[i][j][k].node.original.lat, water[i][j][k].node.original.lng);
							water[i][j][k].node[kind].lat = modified.lat;
							water[i][j][k].node[kind].lng = modified.lng;
						}
					}
				}
			}
		}
	}

	calDispNodes(kind, value) {

		for(let water of this.dispWaterObjects) {

			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				if (kind === 'intermediateReal') {
					for(let i = 0; i < water.length; i++) {
						for(let j = 0; j < water[i].length; j++) {
							water[i][j].node.disp.lat = 
								(1 - value) * water[i][j].node.original.lat + 
								value * water[i][j].node.real.lat;
							water[i][j].node.disp.lng = 
								(1 - value) * water[i][j].node.original.lng +
								value * water[i][j].node.real.lng;
						}
					}
				}
				else if (kind === 'intermediateTarget') {
					for(let i = 0; i < water.length; i++) {
						for(let j = 0; j < water[i].length; j++) {
							water[i][j].node.disp.lat = 
								(1 - value) * water[i][j].node.original.lat + 
								value * water[i][j].node.target.lat;
							water[i][j].node.disp.lng = 
								(1 - value) * water[i][j].node.original.lng +
								value * water[i][j].node.target.lng;
						}
					}
				}
				else {
					for(let i = 0; i < water.length; i++) {
						for(let j = 0; j < water[i].length; j++) {
							water[i][j].node.disp.lat = water[i][j].node[kind].lat;
							water[i][j].node.disp.lng = water[i][j].node[kind].lng;
						}
					}
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				if (kind === 'intermediateReal') {
					for(let i = 0; i < water.length; i++) {
						for(let j = 0; j < water[i].length; j++) {
							for(let k = 0; k < water[i][j].length; k++) {
								water[i][j][k].node.disp.lat = 
									(1 - value) * water[i][j][k].node.original.lat +
									value * water[i][j][k].node.real.lat;
								water[i][j][k].node.disp.lng = 
									(1 - value) * water[i][j][k].node.original.lng + 
									value * water[i][j][k].node.real.lng;
							}
						}
					}
				}
				else if (kind === 'intermediateTarget') {
					for(let i = 0; i < water.length; i++) {
						for(let j = 0; j < water[i].length; j++) {
							for(let k = 0; k < water[i][j].length; k++) {
								water[i][j][k].node.disp.lat = 
									(1 - value) * water[i][j][k].node.original.lat +
									value * water[i][j][k].node.target.lat;
								water[i][j][k].node.disp.lng = 
									(1 - value) * water[i][j][k].node.original.lng + 
									value * water[i][j][k].node.target.lng;
							}
						}
					}
				}
				else {
					for(let i = 0; i < water.length; i++) {
						for(let j = 0; j < water[i].length; j++) {
							for(let k = 0; k < water[i][j].length; k++) {
								water[i][j][k].node.disp.lat = water[i][j][k].node[kind].lat;
								water[i][j][k].node.disp.lng = water[i][j][k].node[kind].lng;
							}
						}
					}
				}
			}
		}
	}

	checkPointsInWater(points) {
		const original = this.tg.map.tgOrigin.origin.original;
		for(let point of points) {
			this.isPointInWater(original, point);
		}
		
		console.log('complete: points in water');
	}

	isPointInWater(original, point) {
		let countIntersection = 0;
		for(let water of this.dispWaterObjects) {
			
			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length - 1; j++) {

						if (this.tg.util.intersects(
							original.lat, original.lng, 
							point.original.lat, point.original.lng, 
		        	water[i][j][1], water[i][j][0], 
		        	water[i][j + 1][1], water[i][j + 1][0])) {
							countIntersection++;
						}
					}
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let i = 0; i < water.length; i++) {
					for(let j = 0; j < water[i].length; j++) {
						for(let k = 0; k < water[i][j].length - 1; k++) {

							if (this.tg.util.intersects(
								original.lat, original.lng, 
								point.original.lat, point.original.lng, 
			        	water[i][j][k][1], water[i][j][k][0], 
			        	water[i][j][k + 1][1], water[i][j][k + 1][0])) {
								countIntersection++;
							}
						}
					}
				}
			}
		}

		if ((countIntersection % 2) === 1) {
			point.travelTime = null;
			//console.log('i: ' + point.index + ' #: ' + countIntersection);
		}
	}

	calNumberOfNode() {
		let count = 0;

		for(let water of this.dispWaterObjects) {
			
			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				for(let water2 of water) {
					count += water2.length;
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let water2 of water) {
					for(let water3 of water2) {
						count += water3.length;
					}
				}
			}
		}
		return count;
	}

	finishGettingWaterObjects() {

		let sum = 0;
		for(let time of this.timeIntervalArray) sum += time;
		//console.log('################ FIN.');
		//console.log('AVG: ' + ());
		const t = parseInt(sum / this.timeIntervalArray.length);
		console.log('complete: getting water(' + t + ' ms)');
		this.timeInterval = 0;
		this.timeIntervalArray = [];

		this.tg.map.calSplittedGrid();
	}

	addNewNodeLayer() {
		let arr = [];
		const edgeStyleFunc = 
			this.mapUtil.lineStyleFunc(this.tg.opt.color.edge, this.tg.opt.width.edge);
		const nodeStyleFunc = 
			this.mapUtil.nodeStyleFunc(this.tg.opt.color.waterNode, this.tg.opt.radius.node);

		for(let water of this.newWaterObjects) {
			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				for(let nodes of water) {
					// edge
					this.mapUtil.addFeatureInFeatures(
						arr, new ol.geom.LineString(nodes), edgeStyleFunc);

					// node
					for(let node of nodes) {
						this.mapUtil.addFeatureInFeatures(
							arr, new ol.geom.Point(node), nodeStyleFunc);
					}
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let water2 of water) {
					for(let nodes of water2) {
						// edge
							this.mapUtil.addFeatureInFeatures(
								arr, new ol.geom.LineString(nodes), edgeStyleFunc);

						// node
						for(let node of nodes) {
							this.mapUtil.addFeatureInFeatures(
								arr, new ol.geom.Point(node), nodeStyleFunc);
						}
					}
				}
			}
		}

		const layer = this.mapUtil.olVectorFromFeatures(arr);
		layer.setZIndex(this.tg.opt.z.waterNode);
		this.mapUtil.addLayer(layer);
		this.dispLayers.push(layer);
	}

	addNodeLayer() {

		this.mapUtil.removeLayer(this.nodeLayer);

		let arr = [];
		const edgeStyleFunc = 
			this.mapUtil.lineStyleFunc(this.tg.opt.color.edge, this.tg.opt.width.edge);
		const nodeStyleFunc = 
			this.mapUtil.nodeStyleFunc(this.tg.opt.color.waterNode, this.tg.opt.radius.node);

		for(let water of this.dispWaterObjects) {
			if ((water[0].length === 0)||(water[0][0].length === 0)) continue;

			if (water[0][0].node) { // Polygon
				for(let nodes of water) {
					// edge
					this.mapUtil.addFeatureInFeatures(
						arr, new ol.geom.LineString(nodes), edgeStyleFunc);

					// node
					for(let node of nodes) {
						this.mapUtil.addFeatureInFeatures(
							arr, new ol.geom.Point(node), nodeStyleFunc);
					}
				}
			}
			else if (water[0][0][0].node) { // MultiPolygon
				for(let water2 of water) {
					for(let nodes of water2) {
						// edge
							this.mapUtil.addFeatureInFeatures(
								arr, new ol.geom.LineString(nodes), edgeStyleFunc);

						// node
						for(let node of nodes) {
							this.mapUtil.addFeatureInFeatures(
								arr, new ol.geom.Point(node), nodeStyleFunc);
						}
					}
				}
			}
		}
		this.nodeLayer = this.mapUtil.olVectorFromFeatures(arr);
		this.nodeLayer.setZIndex(this.tg.opt.z.waterNode);
		this.mapUtil.addLayer(this.nodeLayer);
		this.dispLayers.push(this.nodeLayer);
	}

	removeNodeLayer() {
		this.mapUtil.removeLayer(this.nodeLayer);
	}
}