var TgData = {
	zoom: {
		max: 18,
		min: 11,
		init: 14,
		previos: 0,
		current: 0,
		disp: {
			motorway: {min: 1, max: 20},
			trunk: {min: 1, max: 20},
			primary: {min: 11, max: 20},
			secondary: {min: 13, max: 20},
			tertiary: {min: 14, max: 20},
			//residential: {min: 16, max: 20}
		}
	},

	viz: {
		z: {
			water: 0,
			waterNode: 20,
			landuse: 2,
			residential: 5,
			tertiary: 5,
			secondary: 5,
			primary: 5,
			trunk: 6,
			motorway: 7,
			roadNode: 8,
			presets: 9,
			places: 10,
			isochrone: 14,
			origin: 15,
			location: 20,
			favorite: 21,
			boundingBox: 40,
			grid: 50,
			controlPoint: 51,
		},

		color: {
			anchor: 'rgba(0, 0, 0, 0.5)',
			boundingBox: 'rgba(75,0,130, 0.5)',
			controlPoint: '#FFD700',
			controlPointLine: '#FFD700', 
			edge: '#888',
			grid: '#000', //'#FFA07A',
			isochrone: 'rgba(255, 0, 0, 0.5)',
			isochroneText: '#FFF',
			landuse: [
				'rgb(203, 230, 163)', // recreation_ground, park, garden
				'rgb(214, 233, 185)', // cemetery, golf_course, zoo
				'rgb(228, 228, 223)', // university, college, school
				'rgb(236, 239, 234)', // stadium
				'rgb(249, 237, 241)', // hospital
				'rgb(240, 224, 200)', // retail
			],
			landuseNode: '#009245',
			locationLine: 'rgba(0, 0, 0, 0.5)',
			road: {
				motorway: 'rgb(254, 216, 157)',
				trunk: 'rgb(254, 241, 185)',
				primary: '#FFF',
				secondary: '#FFF',
				tertiary: '#FFF',
				residential: '#FFF',
			},
			roadNode: '#E00B62',
			text: '#000', // '#686453',
			textPlace: 'rgba(0, 0, 0, 0.5)', //'#000'
			textPlaceStroke: 'rgba(255, 255, 255, 0.5)', //'#FFF',
			textLocation: '#000', //'rgb(122, 62, 44)', 
			textStreet: 'rgba(0, 0, 0, 0.3)',
			textNumberOfLocations: '#FFF',
			water: 'rgb(163, 204, 255)',
			waterNode: '#0071BC',
		},

		width: {
			controlPointLine: 2,
			edge: 2,
			grid: 2,
			isochrone: 1,
			highLightIsochrone: 2,
			locationLine: 1,
			road: {
				motorway: 4,
				trunk: 4,
				primary: 3,
				secondary: 2,
				tertiary: 2,
				residential: 1,
			},
			textPlaceStroke: 2,
		},

		radius: {
			anchor: 5,
			controlPoint: 13,
			node: 3,
		},

		image: {
			anchor: 'img/anchor.png',
			cancelCustomIsochrone: 'img/cancel_isochrone.png',
			favorite: 'img/mapbtn_dest_favorite.png',
			location: [
				'img/mapbtn_dest_menu1.png', // restaurant
				'img/mapbtn_dest_menu2.png',
				'img/mapbtn_dest_menu3.png', // travel attractions
				'img/mapbtn_dest_menu4.png', // shopping
				'img/mapbtn_dest_menu5.png' // night life
			],
			locationCluster: 'img/mapbtn_dest_cluster.png',
			origin: {
				auto: 'img/mapbtn_origin_car.png',
				bicycle: 'img/mapbtn_origin_bicycle.png',
				pedestrian: 'img/mapbtn_origin_foot.png',
				home: 'img/mapbtn_home.png',
				office: 'img/mapbtn_office.png',
			}, 
			red10min: 'img/10min.png',
			//red100min: 'img/100min.png',
		},

		font: {
			isochroneText: '18px Roboto Condensed',
			places: '14pt Roboto Condensed',
			text: '12pt Roboto Condensed',
			street: '10pt Roboto Condensed',
		},
	},

	origin: {
		default: {
			lat: 47.680275, //47.6631772,
			lng: -122.327324, //-122.3104933,
		},
		home: {
			address: '4225 24th Ave. NE, Seattle, WA',
			lat: 47.6631772,
			lng: -122.3104933,
		},
		office: {
			address: '3960 Benton Lane NE, Seattle, WA',
			lat: 47.6549064,
			lng: -122.3086493,
		}
	},

	center: {
		seattleDowntown: {
			lat: 47.6115744,
			lng: -122.343777,
		},
		seattleUw: {
			lat: 47.658316,
			lng: -122.312035,
		},
		sfLombard: {
			lat: 37.802139,
			lng: -122.4209287,
		},
		nyNyu: {
			lat: 40.72946,
			lng: -73.995708,
		},
		paloAltoStanford: {
			lat: 37.4275172,
			lng: -122.170233,
		},
		quebecCitadelle: {
			lat: 46.8078034,
			lng: -71.2090926,
		},
	},

	box: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},

	elements: {
		water: {
			disp: true,
			simplify: true,
		},
		road: {
			disp: true,
			simplify: true,
		},
		landuse: {
			disp: true,
			simplify: true,
		},
		place: {
			disp: true,
		}
	},

	var: {
		animationSpeed: 0, // ms
		//apiKeyVectorTile: 'vector-tiles-c1X4vZE', // mine
		apiKeyVectorTile: 'mapzen-dKpzpj5', // Ray's
		//apiKeyTimeMatrix: 'matrix-AGvGZKs', // mine
		apiKeyTimeMatrix: 'matrix-qUpjg6W', // Ray's
		appMode: 'mobile', // 'mobile'
		appDispMode: 'normal',

		locBBPx: 40,
		locGroupBBPx: 40,
		locTextLngMarginPx: 25, // left/right margin
		locTextLatMarginPx: 25, // top/bottom margin
		isochroneTextPx: 14,

		deltaFrame: 2,
		latPerPx: 0,
		lngPerPx: 0,	
		latMargin: 0,
		lngMargin: 0,
		longPressTime: 300, // 0.3 sec
		longPressSensitivity: 100,
		numLanduseClasses: 6,
		numRatings: [0, 1000],
		marginPercent: 3.0, 
		maxNumTops: 10,
		maxNumHots: 10,
		maxNumLocations: 20,
		maxNumIsochrone: 5,
		maxSplitLevel: 0, 
		placeProcessed: false,
		priceRange: [0, 4], // 1 ~ 4
		shapePreservingDegree: 1.0,
		startMode: 'EM',
		ratings: [0, 5], // 1 ~ 5
		readyLocation: false,
		resolution: {
			gridLng: 4, // horiozontal resolution. even number is recommended
			gridLat: 8, // vertical resolution. even number is recommended
		},
		rdpThreshold: {
			road: 0.0005, //0.0001 (about 10 meter)
			water: 0.0001, //0.0003,
			landuse: 0.0001,
		},

	},

	time: {
		waitForFinishGettingWaterData: 500, // ms
		waitForFinishGettingRoadData: 1000, // ms
		waitForGettingData: 20, // ms
		waitForGettingRoadData: 100, // ms // 50
		waitForGettingWaterData: 100, // ms // 50
	}
	
}

//module.exports = TgData;