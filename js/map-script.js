
'use strict';

var restaurantData = [
	{
		name: "Balkan Treat Box",
		icon: "de-icon-food",
		color: "#f6700e",
		loc: [38.59223913678226, -90.33781505784111]
	},
	{
		name: "Carl's Deli",
		icon: "de-icon-food",
		color: "#0d9a48",
		loc: [38.634312272455595, -90.30984033085689]
	},
	{
		name: "Carl's Drive In",
		icon: "de-icon-food",
		color: "#f0394d",
		loc: [38.612806645982246, -90.35435755784054]
	},
	{
		name: "Cate Zone",
		icon: "de-icon-food",
		color: "#402ea88c",
		loc: [38.67345830028008, -90.34730017318347]
	},
	{
		name: "Clementine's Creamery",
		icon: "de-icon-food",
		color: "#ff00bf",
		loc: [38.63933203531043, -90.308094623246]
	},
	{
		name: "Crown Candy Kitchen",
		icon: "de-icon-food",
		color: "#008521",
		loc: [38.65152999184415, -90.19793791736488]
	},
	{
		name: "Donut Drive-In",
		icon: "de-icon-food",
		color: "#fcb900",
		loc: [38.59231992241366, -90.3028939615473]
	},
	{
		name: "Gioia's Deli",
		icon: "de-icon-food",
		color: "#00ffff",
		loc: [38.62177245967816, -90.2776399505507]
	},
	{
		name: "The Lucky Accomplice",
		icon: "de-icon-food",
		color: "#000d80",
		loc: [38.60639519728356, -90.22279740624774]
	},
	{
		name: "Mai Lee",
		icon: "de-icon-food",
		color: "#ff13d8",
		loc: [38.627650848097, -90.3374570866763]
	},
	{
		name: "Nudo House",
		icon: "de-icon-food",
		color: "#03e950",
		loc: [38.658852901250576, -90.29527338634078]
	},
	{
		name: "Pastaria",
		icon: "de-icon-food",
		color: "#01f0a8",
		loc: [38.6500844536812, -90.33594665969254]
	},
	{
		name: "Planter's House",
		icon: "de-icon-food",
		color: "#a30000",
		loc: [38.62084546241626, -90.2120577443488]
	},
	{
		name: "Salt + Smoke",
		icon: "de-icon-food",
		color: "#ffa600",
		loc: [38.6518323506355, -90.26182072207367]
	},
	{
		name: "Sauce on the Side",
		icon: "de-icon-food",
		color: "#88008d",
		loc: [38.63023501351425, -90.25735755268029]
	},
	{
		name: "Ted Drewes",
		icon: "de-icon-food",
		color: "#1800f3",
		loc: [38.59145909910877, -90.30748270162887]
	},
	{
		name: "Union Loafers",
		icon: "de-icon-food",
		color: "#19d408",
		loc: [38.61997101172702, -90.25596673085727]
	}
]

var poiData = [
	{
		name: "Busch Stadium",
		icon: "de-icon-flag-1",
		color: "#f6160e",
		loc: [38.62276127622307, -90.19281017318491]
	},
	{
		name: "City Garden",
		icon: "de-icon-tree",
		color: "#0d9a48",
		loc: [38.62811202799459, -90.19367972851843]
	},
	{
		name: "City Museum",
		icon: "de-icon-infinity",
		color: "#393cf0",
		loc: [38.633867239350266, -90.20065468667615]
	},
	{
		name: "Gateway Arch",
		icon: "de-icon-info-2",
		color: "#525252",
		loc: [38.624783965215215, -90.18477978463582]
	},
	{
		name: "Missouri Botanical Garden",
		icon: "de-icon-leaf-2",
		color: "#d458c0",
		loc: [38.61294322897561, -90.25939053085746]
	},
	{
		name: "Missouri History Museum",
		icon: "de-icon-book-1",
		color: "#f0b039",
		loc: [38.648030250763206, -90.28615949673473]
	},
	{
		name: "Saint Louis Art Museum",
		icon: " de-icon-brush",
		color: "#0edbf6",
		loc: [38.639465403443396, -90.29446964434827]
	},
	{
		name: "Saint Louis Zoo",
		icon: "de-icon-linux",
		color: "#333",
		loc: [38.63421948226387, -90.29217827481338]
	},
	{
		name: "Tower Grove Farmer's Market",
		loc: [38.606952611704834, -90.26027753085764],
		icon: "de-icon-leaf",
		color: "#165e1c"
	},
	{
		name: "The Cathedral Basilica of St. Louis",
		loc: [38.64267913581317, -90.25468968667585],
		icon: "de-icon-bell-alt",
		color: "#341192"
	},
	{
		name: "STL Style House",
		loc: [38.59889538111648, -90.2377048676665],
		icon: "de-icon-bag",
		color: "#ff1717"
	},
	{
		name: "The Future Antiques",
		loc: [38.59203846535419, -90.30217885413504],
		icon: "de-icon-bag",
		color: "#555400"
	},
	{
		name: "Union Studio",
		loc: [38.62041235796895, -90.25590423085725],
		icon: "de-icon-gift-2",
		color: "#120ef6"
	},
	{
		name: "Parker's Table",
		loc: [38.633084746205014, -90.30846416206622],
		icon: "de-icon-basket-1",
		color: "#0d9a6b"
	}
]

var eventData = [
	{
		name: "Ceremony/Reception",
		icon: "de-icon-bell-1",
		color: "#f0394d",
		loc: [38.63570209859459, -90.29057367011644]
	},
	{
		name: "Parking Lot",
		icon: "de-icon-cab",
		color: "#0d9a48",
		loc: [38.633218285400375, -90.2912130927869]
	},
	{
		name: "Accessible Drop-Off",
		icon: "de-icon-wheelchair",
		color: "#0d4a9a",
		loc: [38.63360604311911, -90.29115346681569]
	}
]

var breweryData = [
	{
		name: "Anheuser – Busch",
		icon: "de-icon-beer-1",
		color: "#d8251e",
		loc: [38.599869292486666, -90.2088764767055]
	},
	{
		name: "Four Hands",
		icon: "de-icon-beer-1",
		color: "#0f0d9a",
		loc: [38.615097891449956, -90.19771882107202]
	},
	{
		name: "Rockwell Beer Co.",
		icon: "de-icon-beer-1",
		color: "#f039d1",
		loc: [38.62577281567227, -90.25130581736558]
	},
	{
		name: "Schlafly Bottleworks",
		icon: "de-icon-beer-1",
		color: "#e0a930",
		loc: [38.6131609112644, -90.31495025784058]
	},
	{
		name: "Schlafly Tap Room",
		icon: "de-icon-beer-1",
		color: "#ccd458",
		loc: [38.63316752707335, -90.20976371736539]
	},
	{
		name: "2nd Shift Brewing",
		icon: "de-icon-beer-1",
		color: "#39f0c2",
		loc: [38.62167177838797, -90.28109065784031]
	},
	{
		name: "Civil Life",
		icon: "de-icon-beer-1",
		color: "#6bf60e",
		loc: [38.590892327920535, -90.25802574805577]
	},
	{
		name: "Sump Coffee",
		icon: "de-icon-coffee",
		color: "#333",
		loc: [38.58795144899533, -90.2262427462028]
	},
	{
		name: "Comet Coffee",
		icon: "de-icon-coffee",
		color: "#165e1c",
		loc: [38.63040352357437, -90.281862430857]
	},
	{
		name: "Blueprint",
		icon: "de-icon-coffee",
		color: "#341192",
		loc: [38.596035299863374, -90.30142161871129]
	},
]

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function () {
	is_windowresize = true;
});

//INITIALIZE MAP
function initGoogleMap() {
	
	//DEFINE MAP OPTIONS
	//=======================================================================================
	var mapOptions = {
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: new google.maps.LatLng(38.63606267183039, -90.29204233386525),
		panControl: true,
		zoomControl: true,
		mapTypeControl: false,
		//scaleControl: false,
		streetViewControl: true,
		overviewMapControl: true,
		//rotateControl:true,

	};

	//CREATE NEW MAP
	//=======================================================================================
	var eventMapCanvas = document.getElementById('map-canvas');
	if (!!eventMapCanvas) {
		var eventMap = new google.maps.Map(eventMapCanvas, mapOptions);
		restaurantData.forEach(function addRestaurantMarkers(r) {
			var marker = new markerWithLabel.MarkerWithLabel({
				position: new google.maps.LatLng(r.loc[0], r.loc[1]),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: eventMap,
				labelContent: `<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="${r.icon}" style="color:${r.color}"></i></div>`,
				labelAnchor: new google.maps.Point(-21, 3),
				labelClass: "labels" // the CSS class for the label
			});
			var infowindow = new google.maps.InfoWindow({
				content: r.name
			});
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.setPosition(this.getPosition());
				infowindow.open(eventMap);
			});
		});
	}
	

	mapOptions.center = new google.maps.LatLng(38.6166104186062, -90.23929274614613);
	mapOptions.zoom = 13;
	var poiMapCanvas = document.getElementById('poi-map-canvas');
	if (!!poiMapCanvas) {
		var poiMap = new google.maps.Map(poiMapCanvas, mapOptions);
		poiData.forEach(function addPoiMarkers(r) {
			var marker = new markerWithLabel.MarkerWithLabel({
				position: new google.maps.LatLng(r.loc[0], r.loc[1]),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: poiMap,
				labelContent: `<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="${r.icon}" style="color:${r.color}"></i></div>`,
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});
			var infowindow = new google.maps.InfoWindow({
				content: r.name
			});
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.setPosition(this.getPosition());
				infowindow.open(poiMap);
			});
		});
	}

	mapOptions.center = new google.maps.LatLng(38.6166104186062, -90.23929274614613);
	mapOptions.zoom = 13;
	var beerMapCanvas = document.getElementById('beer-map-canvas');
	if (!!poiMapCanvas) {
		var beerMap = new google.maps.Map(beerMapCanvas, mapOptions);
		breweryData.forEach(function addBreweryMarkers(r) {
			var marker = new markerWithLabel.MarkerWithLabel({
				position: new google.maps.LatLng(r.loc[0], r.loc[1]),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: beerMap,
				labelContent: `<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="${r.icon}" style="color:${r.color}"></i></div>`,
				labelAnchor: new google.maps.Point(-21, 3),
				labelClass: "labels" // the CSS class for the label
			});
			var infowindow = new google.maps.InfoWindow({
				content: r.name
			});
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.setPosition(this.getPosition());
				infowindow.open(eventMap);
			});
		});
	}
	

	mapOptions.zoom = 17;
	mapOptions.center = new google.maps.LatLng(38.63449254878442, -90.29089612339787);
	// mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE;
	var whenWhereMapCanvas = document.getElementById('where-map-canvas');
	if (!!whenWhereMapCanvas) {
		var whenWhereMap = new google.maps.Map(whenWhereMapCanvas, mapOptions);
		eventData.forEach(function addEventMarkers(r) {
			var marker = new markerWithLabel.MarkerWithLabel({
				position: new google.maps.LatLng(r.loc[0], r.loc[1]),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: whenWhereMap,
				labelContent: `<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="${r.icon}" style="color:${r.color}"></i></div>`,
				labelAnchor: new google.maps.Point(-21, 3),
				labelClass: "labels" // the CSS class for the label
			});
			var infowindow = new google.maps.InfoWindow({
				content: r.name
			});
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.setPosition(this.getPosition());
				infowindow.open(whenWhereMap);
			});
		});
	}
	

	//MARKER ICON
	//=======================================================================================
	//var image = 'facebook30.svg';

	//ADD NEW MARKER
	//=======================================================================================
	/*var marker = new google.maps.Marker({
	position: map.getCenter(),
			  map: map,
	title: 'Click to zoom',
	icon: image
	});
	
var marker1 = new google.maps.Marker({
	position: new google.maps.LatLng(-12.042559, -77.027426),
			  map: map,
	title: 'Click to zoom'
	});*/


	//ADD NEW MARKER WITH LABEL
	//=======================================================================================







	//marker.setMap( map );


	//INFO WINDOWS
	//=======================================================================================
	// var contentString = '<div>' +
	// 	'WEDDING CEREMONY';
	// '</div>';

	// var contentString1 = '<div>' +
	// 	'WEDDING PARTY';
	// '</div>';

	// var infowindow = new google.maps.InfoWindow({
	// 	content: contentString
	// });

	// var infowindow1 = new google.maps.InfoWindow({
	// 	content: contentString1
	// });



	//OPEN INFO WINDOWS ON LOAD
	//=======================================================================================
	// infowindow.open(map,marker1);

	//ON CLICK MARKER, OPEN INFO WINDOWS
	//=======================================================================================
	// google.maps.event.addListener(marker1, 'click', function() {
	// 	infowindow.open(map,marker1);
	// });

	//ON MARKER CLICK EVENTS
	//=======================================================================================
	/*google.maps.event.addListener(marker, 'click', function() {
				map.setZoom(17);
	map.setCenter(marker.getPosition());
	infowindow.open(map,marker);
	});
	
google.maps.event.addListener(marker1, 'click', function() {
				map.setZoom(17);
	map.setCenter(marker.getPosition());
	infowindow1.open(map,marker1);
	});
	
google.maps.event.addListener(marker2, 'click', function() {
				map.setZoom(17);
	map.setCenter(marker.getPosition());
	infowindow1.open(map,marker2);
	});*/

	//ON BOUND EVENTS AND WINDOW RESIZE
	//=======================================================================================
	// google.maps.event.addListener(eventMap, 'bounds_changed', function () {
	// 	if (is_windowresize) {
	// 		//map.setCenter(marker.getPosition());
	// 		window.setTimeout(function () {
	// 			eventMap.panTo(marker1.getPosition());
	// 		}, 500);
	// 	}
	// 	is_windowresize = false;
	// });
}

// LOAD GMAP
// google.maps.event.addDomListener(window, 'load', initialize);


