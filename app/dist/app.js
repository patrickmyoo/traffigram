/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const TgApp = require('./tg_app');

console.log(pts_lv0);
console.log(pts_lv1);
console.log(pts_lv2);
console.log(locs_lv0);
console.log(locs_lv1);
console.log(locs_lv2);

var tg = new TgApp('ol_map');
tg.setCenter(0);

$("#origin0RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(0);
  }
});

$("#origin1RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(1);
  }
});

$("#origin2RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(2);
  }
});

$("#origin3RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(3);
  }
});

$("#origin4RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(4);
  }
});

$("#origin5RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(5);
  }
});

$("#origin6RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(6);
  }
});

$("#origin7RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(7);
  }
});

$("#origin8RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(8);
  }
});

$("#origin9RB").change(function (ev) {
  if (ev.target.checked) {
    tg.setCenter(9);
  }
});

$("#fineRB").change(function (ev) {
  if (ev.target.checked) {
    tg.setZoom(0);
  }
});

$("#mediumRB").change(function (ev) {
  if (ev.target.checked) {
    tg.setZoom(1);
  }
});

$("#coarseRB").change(function (ev) {
  if (ev.target.checked) {
    tg.setZoom(2);
  }
});

$("#debugBtn").click(function (ev) {
  tg.debug();
});

$("#debugBtn2").click(function (ev) {
  tg.debug2();
});

/*
let tg;

getCurrentLocation()
.then((data) => {

  // create the main app object
  tg = new TgApp('ol_map');

  console.log('got lat & lng from geolocation: ' + data.lat + ', ' + data.lng);

  const seattle = {lat: 47.6115744, lng: -122.343777}

  if ((data.lat > seattle.lat - 1) && (data.lat < seattle.lat + 1) &&
      (data.lng > seattle.lng - 1) && (data.lng < seattle.lng + 1)) {
    //console.log('ok. here is in seattle.');
    tg.setOriginByOtherLatLng(data.lat, data.lng);
  }
  else {
    tg.setOriginAsDefault();
  }

  // ui for origin setting
  const otherAddress = '1000 4th Ave, Seattle, WA 98104';
  $("#yourHomeInput").val(tg.data.origin.home.address);
  $("#yourOfficeInput").val(tg.data.origin.office.address);
  $("#otherPlaceInput").val(otherAddress);

})
.catch((error) => {
  console.error(error);
  tg = new TgApp('ol_map');
  tg.setOriginAsDefault();
});
*/

/*
 * For the origin setting
 */
/*const myHome = {
	address: '4225 24th Ave. NE, Seattle, WA',
	lat: 47.6631772,
	lng: -122.3104933,
};

const myOffice = {
	address: '3960 Benton Lane NE, Seattle, WA',
}

const otherPlace = {
	address: '1000 4th Ave, Seattle, WA 98104',
}*/

//const favorites = ["Tilikum Place Cafe", "Radiator Whiskey", "The Zig Zag CafÃ©",
//  "Pike Place Chowder", "Art of The Table", "SkyCity at the Needle", 
//  "Canlis", "Von's Gustobistro", "Purple CafÃ© and Wine Bar", "LecÅsho", "Olde 99 Pub"];

//tg.map.tgLocs.setFavorites(favorites);


// default: myHome
//tg.setOriginAsHome();
//tg.setOriginAsOffice();
//tg.setOriginByAddress(otherAddress);


function getCurrentLocation() {
  return new Promise(function (resolve, reject) {
    var timeOutForGettingLocation = 5000; // 2 sec
    var timeOutTimer = void 0;

    if (!navigator.geolocation) {
      reject('Geolocation is not supported by this browser.');
    } else {
      navigator.geolocation.getCurrentPosition(function (pos) {
        clearTimeout(timeOutTimer);
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      });

      timeOutTimer = setTimeout(function () {
        reject('Time out for getting geolocation');
      }, timeOutForGettingLocation);
    }
  });
}

$("#originYourHomeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.initMap();
    tg.setOriginAsHome();
  }
});

$("#originYourOfficeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.initMap();
    tg.setOriginAsOffice();
  }
});

$("#originOtherPlaceRB").change(function (ev) {
  if (ev.target.checked) {
    tg.initMap();
    var address = $("#otherPlaceInput").val();
    tg.setOriginByAddress(address);
  }
});

$("#originYourLocationRB").change(function (ev) {
  if (ev.target.checked) {
    tg.initMap();
    tg.setOriginAsCurrentLocation();
  }
});

/*
 * For the mode of the map (EM <-> DC)
 */

$("#emModeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.goToEm();
  }
});

$("#dcSGapModeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.goToDc('shapePreserving');
  }
});

$("#dcGapModeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.goToDc('noIntersection');
  }
});

$("#dcOriginalModeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.goToDc('originalDC');
  }
});

$("#dcNoWarpModeRB").change(function (ev) {
  if (ev.target.checked) {
    tg.goToDc('noWarping');
  }
});

/*
 * For the mode of the transportation
 */
$("#transportVehiclesRB").change(function (ev) {
  if (ev.target.checked) {
    tg.setTransportTypeAndGo('auto');
  }
});

$("#transportBicyclesRB").change(function (ev) {
  if (ev.target.checked) {
    tg.setTransportTypeAndGo('bicycle');
  }
});

$("#transportOnFootRB").change(function (ev) {
  if (ev.target.checked) {
    tg.setTransportTypeAndGo('pedestrian');
  }
});

/*
 * For the type of the destination
 */
/*$("#locationRestaurantRB").change(function(ev){
	if (ev.target.checked) {
		tg.map.tgLocs.changeType('food');
	} 
});

$("#locatioBarRB").change(function(ev){
	if (ev.target.checked) {
		tg.map.tgLocs.changeType('bar');
	} 
});

$("#locationParkRB").change(function(ev){
	if (ev.target.checked) {
		tg.map.tgLocs.changeType('park');
	} 
});

$("#locationMuseumRB").change(function(ev){
	if (ev.target.checked) {
		tg.map.tgLocs.changeType('museum');
	} 
});*/

/*
 * For general ui
 */

function zoomIn() {
  tg.zoomIn();
}

function zoomOut() {
  tg.zoomOut();
}

// Visual Elements Representation Options (For debugging)

$("#dispWaterCB").change(function (ev) {
  tg.map.tgWater.turn(ev.target.checked);
  tg.map.tgWater.render();
});

$("#dispRoadsCB").change(function (ev) {
  tg.map.tgRoads.turn(ev.target.checked);
  tg.map.tgRoads.render();
});

$("#dispLanduseCB").change(function (ev) {
  tg.map.tgLanduse.turn(ev.target.checked);
  tg.map.tgLanduse.render();
});

$("#dispLocationCB").change(function (ev) {
  tg.map.tgLocs.turn(ev.target.checked);
  tg.map.tgLocs.render();
});

$("#dispPlaceCB").change(function (ev) {
  tg.map.tgPlaces.turn(ev.target.checked);
  tg.map.tgPlaces.render();
});

$("#dispNodesCB").change(function (ev) {
  tg.map.dispNodeLayer = ev.target.checked;
  tg.map.updateLayers();
});

$("#dispOriginCB").change(function (ev) {
  tg.map.tgOrigin.turn(ev.target.checked);
  tg.map.tgOrigin.render();
});

$("#dispBoundingBoxCB").change(function (ev) {
  tg.map.tgBB.turn(ev.target.checked);
  tg.map.tgBB.render();
});

$("#dispControlPointsCB").change(function (ev) {
  tg.map.dispControlPointLayer = ev.target.checked;
  tg.map.updateLayers();
});

$("#dispGridCB").change(function (ev) {
  tg.map.tgGrids.turn(ev.target.checked);
  tg.map.tgGrids.render();
});

$("#dispIsochroneCB").change(function (ev) {
  tg.map.tgIsochrone.turn(ev.target.checked);
  tg.map.tgIsochrone.render();
});

/*$("#dispWaterNodeCB").change(function(ev){ 
	tg.map.dispWaterNodeLayer = ev.target.checked;
	tg.map.updateLayers();
});

$("#dispRoadNodeCB").change(function(ev){ 
	tg.map.dispRoadNodeLayer = ev.target.checked;
	tg.map.updateLayers();
});

$("#dispLanduseNodeCB").change(function(ev){ 
	tg.map.dispLanduseNodeLayer = ev.target.checked;
	tg.map.updateLayers();
});*/

$("#debugBtn").click(function () {
  tg.map.debug();
});

$("#tod_0_all").click(function (ev) {
  tg.map.tgLocs.changeType(0, -1);
});
$("#tod_0_0").click(function (ev) {
  tg.map.tgLocs.changeType(0, 0);
});
$("#tod_0_1").click(function (ev) {
  tg.map.tgLocs.changeType(0, 1);
});
$("#tod_0_2").click(function (ev) {
  tg.map.tgLocs.changeType(0, 2);
});
$("#tod_0_3").click(function (ev) {
  tg.map.tgLocs.changeType(0, 3);
});
$("#tod_0_4").click(function (ev) {
  tg.map.tgLocs.changeType(0, 4);
});
$("#tod_0_5").click(function (ev) {
  tg.map.tgLocs.changeType(0, 5);
});
$("#tod_0_6").click(function (ev) {
  tg.map.tgLocs.changeType(0, 6);
});
$("#tod_0_7").click(function (ev) {
  tg.map.tgLocs.changeType(0, 7);
});
$("#tod_0_8").click(function (ev) {
  tg.map.tgLocs.changeType(0, 8);
});
$("#tod_0_9").click(function (ev) {
  tg.map.tgLocs.changeType(0, 9);
});
$("#tod_0_10").click(function (ev) {
  tg.map.tgLocs.changeType(0, 10);
});

$("#tod_1_all").click(function (ev) {
  tg.map.tgLocs.changeType(1, -1);
});
$("#tod_1_0").click(function (ev) {
  tg.map.tgLocs.changeType(1, 0);
});
$("#tod_1_1").click(function (ev) {
  tg.map.tgLocs.changeType(1, 1);
});
$("#tod_1_2").click(function (ev) {
  tg.map.tgLocs.changeType(1, 2);
});
$("#tod_1_3").click(function (ev) {
  tg.map.tgLocs.changeType(1, 3);
});
$("#tod_1_4").click(function (ev) {
  tg.map.tgLocs.changeType(1, 4);
});
$("#tod_1_5").click(function (ev) {
  tg.map.tgLocs.changeType(1, 5);
});

$("#tod_2_all").click(function (ev) {
  tg.map.tgLocs.changeType(2, -1);
});
$("#tod_2_0").click(function (ev) {
  tg.map.tgLocs.changeType(2, 0);
});
$("#tod_2_1").click(function (ev) {
  tg.map.tgLocs.changeType(2, 1);
});
$("#tod_2_2").click(function (ev) {
  tg.map.tgLocs.changeType(2, 2);
});
$("#tod_2_3").click(function (ev) {
  tg.map.tgLocs.changeType(2, 3);
});
$("#tod_2_4").click(function (ev) {
  tg.map.tgLocs.changeType(2, 4);
});
$("#tod_2_5").click(function (ev) {
  tg.map.tgLocs.changeType(2, 5);
});
$("#tod_2_6").click(function (ev) {
  tg.map.tgLocs.changeType(2, 6);
});
$("#tod_2_7").click(function (ev) {
  tg.map.tgLocs.changeType(2, 7);
});

$("#tod_3_all").click(function (ev) {
  tg.map.tgLocs.changeType(3, -1);
});
$("#tod_3_0").click(function (ev) {
  tg.map.tgLocs.changeType(3, 0);
});
$("#tod_3_1").click(function (ev) {
  tg.map.tgLocs.changeType(3, 1);
});
$("#tod_3_2").click(function (ev) {
  tg.map.tgLocs.changeType(3, 2);
});
$("#tod_3_3").click(function (ev) {
  tg.map.tgLocs.changeType(3, 3);
});
$("#tod_3_4").click(function (ev) {
  tg.map.tgLocs.changeType(3, 4);
});
$("#tod_3_5").click(function (ev) {
  tg.map.tgLocs.changeType(3, 5);
});
$("#tod_3_6").click(function (ev) {
  tg.map.tgLocs.changeType(3, 6);
});
$("#tod_3_7").click(function (ev) {
  tg.map.tgLocs.changeType(3, 7);
});

$("#tod_4_all").click(function (ev) {
  tg.map.tgLocs.changeType(4, -1);
});
$("#tod_4_0").click(function (ev) {
  tg.map.tgLocs.changeType(4, 0);
});
$("#tod_4_1").click(function (ev) {
  tg.map.tgLocs.changeType(4, 1);
});
$("#tod_4_2").click(function (ev) {
  tg.map.tgLocs.changeType(4, 2);
});
$("#tod_4_3").click(function (ev) {
  tg.map.tgLocs.changeType(4, 3);
});
$("#tod_4_4").click(function (ev) {
  tg.map.tgLocs.changeType(4, 4);
});
$("#tod_4_5").click(function (ev) {
  tg.map.tgLocs.changeType(4, 5);
});
$("#tod_4_6").click(function (ev) {
  tg.map.tgLocs.changeType(4, 6);
});

if ($("#ratingSlider")) {
  $("#ratingSlider").slider({
    id: "ratingSlider",
    step: 1,
    value: [4, 8],
    ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ticks_labels: ['1', '', '2', '', '3', '', '4', '', '5'],
    tooltip: 'hide'
    //min: 0, max: 5, step: 0.5, value: 3, 
    //tooltip: 'always'
  });
  $("#ratingSlider").on("change", function (e) {
    if (e.value.oldValue[0] !== e.value.newValue[0] || e.value.oldValue[1] !== e.value.newValue[1]) {

      var low = e.value.newValue[0] / 2 + 1;
      var high = e.value.newValue[1] / 2 + 1;
      //console.log(low + ', ' + high);

      tg.map.tgLocs.doFilter('ratings', low, high);
    }
  });
}

if ($("#numRatingSlider")) {
  $("#numRatingSlider").slider({
    id: "numRatingSlider",
    step: 1,
    value: [1, 6],
    ticks: [0, 1, 2, 3, 4, 5, 6],
    ticks_labels: ['0', '5', '10', '50', '100', '500', '1000+'],
    tooltip: 'hide'
  });

  $("#numRatingSlider").on("change", function (e) {
    if (e.value.oldValue[0] !== e.value.newValue[0] || e.value.oldValue[1] !== e.value.newValue[1]) {

      var labels = [0, 5, 10, 50, 100, 500, 1000];
      var low = labels[e.value.newValue[0]];
      var high = labels[e.value.newValue[1]];
      //console.log(low + ', ' + high);

      tg.map.tgLocs.doFilter('numRatings', low, high);
    }
  });
}

if ($("#priceRangeSlider")) {
  $("#priceRangeSlider").slider({
    id: "priceRangeSlider",
    step: 1,
    value: [0, 3],
    ticks: [0, 1, 2, 3],
    ticks_labels: ['$', '$$', '$$$', '$$$$'],
    tooltip: 'hide'
  });

  $("#priceRangeSlider").on("change", function (e) {
    if (e.value.oldValue[0] !== e.value.newValue[0] || e.value.oldValue[1] !== e.value.newValue[1]) {

      var low = e.value.newValue[0] + 1;
      var high = e.value.newValue[1] + 1;
      //console.log(low + ', ' + high);

      tg.map.tgLocs.doFilter('priceRange', low, high);
    }
  });
}

if ($("#maxLocsSlider")) {
  $("#maxLocsSlider").slider({
    id: "maxLocsSlider",
    step: 1,
    value: 2,
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ['10', '20', '30', '40', '50+'],
    tooltip: 'hide'
  });

  $("#maxLocsSlider").on("change", function (e) {
    if (e.value.oldValue !== e.value.newValue) {
      var val = e.value.newValue * 10;
      //console.log(val);

      tg.map.tgLocs.doFilter('maxLocs', val);
    }
  });
}

/*
// Center Options
$("#centerDowntownSeattleRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setArea('seattleDowntown');
  }
});

$("#centerUWSeattleRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setArea('seattleUw');
  }
});

$("#centerLombardSFRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setArea('sfLombard');
  }
});

$("#centerNYUNYRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setArea('nyNyu');
  }
});

$("#centerStanfordPaloAltoRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setArea('paloAltoStanford');
  }
});

$("#centerCitadelleQuebecRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setArea('quebecCitadelle');
  }
});

$("#centerYourPositionRB").change(function(ev){
  if (ev.target.checked) {
  	tg.map.initMap();
  	tg.map.setCenterUserPosition();
  }
});*/

/*
// Roads Options
$("#roadTypeHighwayCB").change(function(ev){
	if (ev.target.checked) tg.map.addRoadType('highway');
	else tg.map.removeRoadType('highway');
	tg.map.updateLayers();
})

$("#roadTypePrimaryCB").change(function(ev){
	if (ev.target.checked) tg.map.addRoadType('primary');
	else tg.map.removeRoadType('primary');
	tg.map.updateLayers(); 
})

$("#roadTypeSecondaryCB").change(function(ev){
	if (ev.target.checked) tg.map.addRoadType('secondary');
	else tg.map.removeRoadType('secondary');
	tg.map.updateLayers(); 
})

$("#roadTypeTertiaryCB").change(function(ev){
	if (ev.target.checked) tg.map.addRoadType('tertiary');
	else tg.map.removeRoadType('tertiary');
	tg.map.updateLayers(); 
})

$("#roadTypeResidentialCB").change(function(ev){
	if (ev.target.checked) tg.map.addRoadType('residential');
	else tg.map.removeRoadType('residential');
	tg.map.updateLayers();  
})

$("#roadTypeLinksCB").change(function(ev){
	if (ev.target.checked) tg.map.addRoadType('links');
	else tg.map.removeRoadType('links');
	tg.map.updateLayers();  
})*/

/*var randomSlider = new Slider("#randomSlider");
//$("#randomSlider").on("change", function(evt) {
$("#randomSlider").on("slideStop", function(evt) {
  tg.data.randomness = evt.value / 100;
  tg.data.moveControlPoints();
  tg.map.updateLayers();
});*/

/***/ })
/******/ ]);