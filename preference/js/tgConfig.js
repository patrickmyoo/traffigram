const options = {
	maxZoom: 18,
	minZoom: 11,
	zoom: 13, //14

	type: {
		motorway: 1,
		trunk: 2,
		primary: 11,
		secondary: 12,
		tertiary: 13,
		motorway_link: 21,
		trunk_link: 22,
		primary_link: 23,
		secondary_link: 24,
		tertiary_link: 25
	},

	z: {
		water: 0,
		waterNode: 1,
		road: 2,
		roadNode: 3,
		grid: 4,
		controlPoint: 5,
		centerPosition: 10
	},

	dispZoom: {
		motorway: {minZoom:11, maxZoom:18},
		trunk: {minZoom:11, maxZoom:18},
		primary: {minZoom:12, maxZoom:18},
		secondary: {minZoom:13, maxZoom:18},
		tertiary: {minZoom:14, maxZoom:18}
	},

	color: {
		water: 'rgba(146, 219, 238, 1)',
		road: {
			motorway: '#969696',
			trunk: '#969696',
			primary: '#969696',
			secondary: '#969696',
			tertiary: '#969696'
		},

		highway: '#969696',
		arterial: '#969696',
		link: '#BBB', //'#00ADEE'
		node: '#A52A2A',
		text: '#000',
		grid: '#FFA07A',

		location: '#33cc33',
		locationLine: '#33cc33',
		controlPoint: '#FFD700',
		controlPointLine: '#FFD700',
	},

	width: {
		road: {
			motorway: 4,
			trunk: 4,
			primary: 1,
			secondary: 1,
			tertiary: 1
		},
		highway: 1,
		arterial: 1,
		link: 1,
		grid: 2,

		locationLine: 1,
		controlPointLine: 1,
		
	},

	radius: {
		node: 3,
		controlPoint: 5,
		location: 5,
	},

	image: {
		center: 'img/icon_origin.png',
		location: 'img/map_loc.png',
	},

	font: {
		text: '14px Source Sans Pro',
	},

	center: {
		seattle: {
			lat: 47.6080445,
			lng: -122.334108
		},
		NY: {
			lat: 40.76702,
			lng: -73.97644
		},
		SF: {
			lat: 37.7794,
			lng: -122.45636
		}
	},

	boundary: {
		seattle: {
			east: -122.0791,
			west: -122.4379,
			south: 47.3956,
			north: 47.8591
		}
	},

	box: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	},

	resolution: {
		gridLng: 4, // horiozontal resolution. even number is recommended
		gridLat: 8, // vertical resolution. even number is recommended
	},

	networkByZoom: {
		'level1': [11],
		'level2': [12],
		'level3': [13, 14],
		'level4': [15, 16, 17, 18]
	},

	constant: {
		randomness: 0.01,
		clickSensibility: 0.01,
		splitThreshold: 200,
		timeToWaitForGettingWaterData: 0, // ms
		timeToWaitForGettingRoadData: 20 // ms
	},

}

