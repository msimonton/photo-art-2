$(document).ready(function()  {

  // var currentChart;
  // function showChart( divid ) {
  //
  //   if (currentChart !== undefined)
  //     currentChart.style.display = "none";
  //   if ( divid ) {
  //     currentChart = document.getElementById(divid);
  //     currentChart.style.display = "block";
  //   }
  //   else {
  //     currentChart = undefined;
  //   }
  // }


              // functions to display trips on trips page

  $("#euro").click(function() {
    $('#world-contain').fadeOut('2000')
    $('#euro-contain').delay('400').fadeIn('2000')
    $(this).addClass('active')
    $('#world').removeClass('active')
  })
  $("#world").click(function() {
    $('#euro-contain').fadeOut('2000')
    $('#world-contain').delay('400').fadeIn('2000')
    $(this).addClass('active')
    $('#euro').removeClass('active')
  })


})



var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";


var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

AmCharts.makeChart( "worldtrip", {
  "type": "map",
  "theme": "none",
  "pathToImages": "https://www.amcharts.com/lib/3/images/",

  "dataProvider": {
   "map": "worldLow",
   "lines": [ {
     "id": "line1",
     "arc": -0.85,
     "alpha": 0.3,
     "latitudes": [ 39.7392, 41.0082, -6.7924, -6.1357, 25.2048, -33.8688, -45.0312, 37.5665  ],
     "longitudes": [ -104.9903, 28.9784, 39.2083, 39.3621, 55.2708, 151.2093, 168.6626, 126.9780 ]
   }, {
     "id": "line2",
     "alpha": 0,
     "color": "#000000",
     "latitudes": [ 39.7392, 41.0082, -6.7924, -6.1357, 25.2048, -33.8688, -45.0312, 37.5665 ],
     "longitudes": [ -104.9903, 28.9784, 39.2083, 39.3621, 55.2708, 151.2093, 168.6626, 126.9780 ]
   } ],

   "images": [{
     "svgPath": planeSVG,
     "positionOnLine": 0,
     "color": "#000000",
     "alpha": 0.1,
     "animateAlongLine": true,
     "lineId": "line2",
     "flipDirection": false,
     "loop": true,
     "scale": 0.03,
     "positionScale": 1.6
   }, {
     "svgPath": planeSVG,
     "positionOnLine": 0,
     "color": "#585869",
     "animateAlongLine": true,
     "lineId": "line1",
     "flipDirection": false,
     "loop": true,
     "scale": 0.03,
     "positionScale": 2.8
   } ],

"areas": [{
    "id": "US",
    "zoomLevel": 4,
    "images": [{
      "svgPath": targetSVG,
      "labelPosition": "bottom",
      "latitude": 39.7392,
      "longitude": -104.9903,
      "width": 52,
      "height": 52,
      "outlineColor": "white",
      "rollOverColor": "#2b396c",
      label: "Denver",
      // labelColor: "#fff",
      "description": "<h3 class='location-head'>Denver</h3><a href='gallery.html'><img class='map-test' src='../../images/trips/main/liz-airport.jpg'/></a>",
      // "descriptionWindowHeight": 600,
      // "descriptionWindowWidth": 10000,
      "descriptionWindowTop": 30,
      "descriptionWindowLeft": 25,
      "zoomLevel": 7,

        }]
      },
      {
      "id": "TR",
      "zoomLevel": 20,
      "images": [{
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        label: "Istanbul",
        "latitude": 41.0082,
        "longitude": 28.9784,
        width: 32,
        height: 32,
        // labelColor: "#fff",
        "description": "",
        "zoomLevel": 25,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      }]
    },

      {
      "id": "TZ",
      "zoomLevel": 50,
      "images": [{
        label: "Dar es Salaam",
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        "latitude": -6.7924,
        "longitude": 39.2083,
        width: 32,
        height: 32,
        // labelColor: "#fff",
        "description": "<h3 class='location-head'>Dar es Salaam</h3><a href='gallery.html'><img class='map-test' src='../images/trips/arusha/africasureal-project.jpg'/><img class='map-test' src='../images/trips/arusha/masaii-Project.jpg'/><img class='map-test' src='../images/trips/arusha/rhino-collage.jpg'/><img class='map-test' src='../images/trips/arusha/rhinos-frame.jpg'/><img class='map-test' src='../images/trips/arusha/safari-collage.jpg'/><img class='map-test' src='../images/trips/arusha/skip-safari-breakfast.jpg'/><img class='map-test' src='../images/trips/arusha/trer-egrites.jpg'/><img class='map-test' src='../images/trips/arusha/waterbuffalo-tanzania.jpg'/><img class='map-test' src='../images/trips/arusha/zebras-distorted.jpg'/></a>",
        "zoomLevel": 55,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      },
      {
        label: "Zanzibar Island",
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        "latitude": -6.1357,
        "longitude": 39.3621,
        width: 32,
        height: 32,
        // labelColor: "#fff",
        "description": "<h3 class='location-head'>Zanzibar Island</h3><a href='gallery.html'><img class='map-test' src='../images/trips/zanzibar/balance.JPG'/><img class='map-test' src='../images/trips/zanzibar/liz-fish.jpg'/><img class='map-test' src='../images/trips/zanzibar/skip-fish.JPG'/><img class='map-test' src='../images/trips/zanzibar/stonetown-street-scene.jpg'/><img class='map-test' src='../images/trips/zanzibar/zanzibar-sunset800.jpg'/></a>",
        "zoomLevel": 55,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
          }]
        },


        {
        "id": "AE",
        "zoomLevel": 20,
        "images": [{
          label: "Dubai",
          "svgPath": targetSVG,
          "labelPosition": "bottom",
          "latitude": 25.2048,
          "longitude": 55.2708,
          width: 52,
          height: 32,
          // labelColor: "#fff",
          "description": "<h3 class='location-head'>Dubai</h3><a href='gallery.html'><img class='map-test' src='../images/union-station.jpg'/><img class='map-test' src='../images/grand-hotel.jpg'/><img class='map-test' src='../images/denver-blur.jpg'/></a>",
          "zoomLevel": 25,
          "descriptionWindowTop": 30,
          "descriptionWindowLeft": 25,
        }]
        },


        {
        "id": "AU",
        "zoomLevel": 10,
        "images": [{
          "svgPath": targetSVG,
          "labelPosition": "bottom",
          label: "Sydney",
          "latitude": -33.8688,
          "longitude": 151.2093,
          width: 32,
          height: 32,
          // labelColor: "#fff",
          "description": "<h3 class='location-head'>Sydney</h3><a href='gallery.html'><img class='map-test' src='../images/trips/sydney/sydney-australia.jpg'/><img class='map-test' src='../images/trips/sydney/sydney-bridge.jpg'/><img class='map-test' src='../images/trips/sydney/sydney-opera-house-2.jpg'/><img class='map-test' src='../images/trips/sydney/sydney-opera-house.jpg'/></a>",
          "zoomLevel": 15,
          "descriptionWindowTop": 30,
          "descriptionWindowLeft": 25,
        }]
        },

      {
      "id": "NZ",
      "zoomLevel": 10,
      "images": [{
        "title": "euk",
        label: "Queenstown",
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        "latitude": -45.0312,
        "longitude": 168.6626,
        width: 32,
        height: 32,
        // labelColor: "#fff",
        "description": "<h3 class='location-head'>Queenstown</h3><a href='gallery.html'><img class='map-test' src='../images/trips/queenstown/plane-tail.JPG'/><img class='map-test' src='../images/trips/queenstown/plane-wing.JPG'/><img class='map-test' src='../images/trips/queenstown/posts.JPG'/><img class='map-test' src='../images/trips/queenstown/queenstown-rock-skipping.jpg'/><img class='map-test' src='../images/trips/queenstown/queenstown-sunset.jpg'/><img class='map-test' src='../images/trips/queenstown/tasting-NZ.jpg'/><img class='map-test' src='../images/trips/queenstown/us-boat.JPG'/><img class='map-test' src='../images/trips/queenstown/us-mountain.JPG'/><img class='map-test' src='../images/trips/queenstown/Worries-blessings.jpg'/></a>",
        "zoomLevel": 15,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      }]
      },

    {
    "id": "KR",
    "zoomLevel": 20,
    "images": [{
      label: "Seoul",
      "svgPath": targetSVG,
      "labelPosition": "bottom",
      "latitude": 37.5665,
      "longitude": 126.9780,
      width: 32,
      height: 32,
      // labelColor: "#fff",
      "description": "<h3 class='location-head'>Seoul</h3><a href='gallery.html'><img class='map-test' src='../images/union-station.jpg'/><img class='map-test' src='../images/grand-hotel.jpg'/><img class='map-test' src='../images/denver-blur.jpg'/></a>",
      "zoomLevel": 25,
      "descriptionWindowTop": 30,
      "descriptionWindowLeft": 25,
    }]
    }

]

  },
  "areasSettings": {
      // "autoZoom": true,
      "color": "#a9b2dd",
      "selectedColor": "#a9b2dd",
      "rollOverOutlineColor": "#fff",
      "rollOverColor": "#2b6295"
      // "selectedColor": "#CC0000"
  },

  "imagesSettings": {
    "labelRollOverColor": "#000",
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 0.2,
    "animationDuration": 2.5,
    "adjustAnimationSpeed": false,
    "bringForwardOnHover": true,
  },

  "linesSettings": {
    "color": "#585869",
    "alpha": 0.4,
    "bringForwardOnHover": false
  },
});



var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";


var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

 AmCharts.makeChart( "eurotrip", {
  "type": "map",
  "theme": "none",
  "pathToImages": "https://www.amcharts.com/lib/3/images/",

  "dataProvider": {
   "map": "worldLow",
   "linkToObject": "IT",
   "lines": [ {
     "id": "line1",
     "arc": -0.85,
     "alpha": 0.3,
     "latitudes": [ 41.8919300, 40.6340, 37.6000, 42.4247, 42.6507, 43.5081, 45.0812, 45.4408, 36.3932, 47.3769, 46.6242 ],
     "longitudes": [ 12.5113300, 14.6027, 14.0154, 18.7712, 18.0944, 16.4402, 13.6387, 12.3155, 25.4615, 8.5417, 8.0414 ]
   }, {
     "id": "line2",
     "alpha": 0,
     "color": "#000000",
     "latitudes": [ 41.8919300, 40.6340, 37.6000, 42.4247, 42.6507, 43.5081, 45.0812, 45.4408, 36.3932, 47.3769, 46.6242 ],
     "longitudes": [ 12.5113300, 14.6027, 14.0154, 18.7712, 18.0944, 16.4402, 13.6387, 12.3155, 25.4615, 8.5417, 8.0414]
   } ],

   "images": [{
     "svgPath": planeSVG,
     "positionOnLine": 0,
     "color": "#000000",
     "alpha": 0.1,
     "animateAlongLine": true,
     "lineId": "line2",
     "flipDirection": false,
     "loop": true,
     "scale": 0.03,
     "positionScale": 1.6
   }, {
     "svgPath": planeSVG,
     "positionOnLine": 0,
     "color": "#585869",
     "animateAlongLine": true,
     "lineId": "line1",
     "flipDirection": false,
     "loop": true,
     "scale": 0.03,
     "positionScale": 2.8
   } ],

"areas": [
  {
    "id": "IT",
    "zoomLevel": 13,
    "images": [{
      "svgPath": targetSVG,
      "labelPosition": "bottom",
      "latitude": 41.8919300,
      "longitude": 12.5113300,
      "width": 52,
      "height": 52,
      "outlineColor": "white",
      "rollOverColor": "#2b396c",
      label: "Rome",
      "labelColor": "black",
      "labelFontSize": 18,
      "description": "<h3 class='location-head'>Rome</h3><a href='gallery.html'><img class='map-test' src='../../images/trips/main/liz-airport.jpg'/></a>",
      // "descriptionWindowHeight": 600,
      // "descriptionWindowWidth": 10000,
      "descriptionWindowTop": 30,
      "descriptionWindowLeft": 25,
      "zoomLevel": 18,
      },
      {
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        label: "Amalfi",
        "labelColor": "black",
        "labelFontSize": 18,
        "latitude": 40.6340,
        "longitude": 14.6027,
        width: 32,
        height: 32,
        // labelColor: "#fff",
        "description": "",
        "zoomLevel": 18,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      },{
      label: "Sicily",
      "labelColor": "black",
      "labelFontSize": 18,
      "svgPath": targetSVG,
      "labelPosition": "bottom",
      "latitude": 37.6000,
      "longitude": 14.0154,
      width: 32,
      height: 32,
      // labelColor: "#fff",
      "description": "",
      "zoomLevel": 18,
      "descriptionWindowTop": 30,
      "descriptionWindowLeft": 25,
    },
    {
    label: "Venice",
    "labelColor": "black",
    "labelFontSize": 18,
    "svgPath": targetSVG,
    "labelPosition": "bottom",
    "latitude": 45.4408,
    "longitude": 12.3155,
    width: 32,
    height: 32,
    // labelColor: "#fff",
    "description": "",
    "zoomLevel": 18,
    "descriptionWindowTop": 30,
    "descriptionWindowLeft": 25,
  }]
    },

{
       "id": "ME",
        "images": [{
          label: "Kotor",
          "labelColor": "black",
          "labelFontSize": 18,
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        "latitude": 42.4247,
        "longitude": 18.7712,
        width: 32,
        height: 32,
        // labelColor: "#fff",
        "description": "",
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      }]
        },


        {
        "id": "HR",
        "zoomLevel": 28,
        "images": [{
          label: "Dubrovnik",
          "labelColor": "black",
          "labelFontSize": 18,
          "svgPath": targetSVG,
          "labelPosition": "bottom",
          "latitude": 42.6507,
          "longitude": 18.0944,
          width: 52,
          height: 32,
          // labelColor: "#fff",
          "description": "",
          "zoomLevel": 25,
          "descriptionWindowTop": 30,
          "descriptionWindowLeft": 25,
        },{
          label: "Roven",
          "labelColor": "black",
          "labelFontSize": 18,
          "svgPath": targetSVG,
          "labelPosition": "bottom",
          "latitude": 45.0812,
          "longitude": 13.6387,
          width: 52,
          height: 32,
          // labelColor: "#fff",
          "description": "",
          "zoomLevel": 25,
          "descriptionWindowTop": 30,
          "descriptionWindowLeft": 25,
        },
        {
        label: "Split",
        "labelColor": "black",
        "labelFontSize": 18,
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        "latitude": 43.5081,
        "longitude": 16.4402,
        width: 52,
        height: 32,
        // labelColor: "#fff",
        "description": "",
        "zoomLevel": 25,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      }
    ]},
    {
    "id": "GR",
    "zoomLevel": 28,
        "images":[{
        label: "Santorini",
        "labelColor": "black",
        "labelFontSize": 18,
        "svgPath": targetSVG,
        "labelPosition": "bottom",
        "latitude": 36.3932,
        "longitude": 25.4615,
        width: 52,
        height: 32,
        // labelColor: "#fff",
        "description": "",
        "zoomLevel": 25,
        "descriptionWindowTop": 30,
        "descriptionWindowLeft": 25,
      }]},
        {
        "id": "CH",
        "zoomLevel": 28,
        "images": [{
          "svgPath": targetSVG,
          "labelPosition": "bottom",
          label: "Zurich",
          "labelColor": "black",
          "labelFontSize": 18,
          "latitude": 47.3769,
          "longitude": 8.5417,
          width: 32,
          height: 32,
          // labelColor: "#fff",
          "description": "",
          "zoomLevel": 15,
          "descriptionWindowTop": 30,
          "descriptionWindowLeft": 25,
        },
        {
          "svgPath": targetSVG,
          "labelPosition": "bottom",
          label: "Grindelwald",
          "labelColor": "black",
          "labelFontSize": 18,
          "latitude": 46.6242,
          "longitude": 8.0414,
          width: 32,
          height: 32,
          // labelColor: "#fff",
          "description": "",
          "zoomLevel": 15,
          "descriptionWindowTop": 30,
          "descriptionWindowLeft": 25,
        }]
        }
]

  },
  "areasSettings": {
    "color": "#a9b2dd",
    "selectedColor": "#5367c4",
    "rollOverOutlineColor": "#fff",
    "rollOverColor": "#2b6295",
      "autoZoom": true,
      // "selectedColor": "#CC0000"
  },

  "imagesSettings": {
    "labelRollOverColor": "#000",
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 0.2,
    "animationDuration": 2.5,
    "adjustAnimationSpeed": false,
    "bringForwardOnHover": true,
  },

  "linesSettings": {
    "color": "#585869",
    "alpha": 0.4,
    "bringForwardOnHover": false
  },
  "allLabels": [
		{
			"bold": true,
      "color": "white",

    }]

});

// var currentChart;
// function showChart( divid ) {
//
//   if (currentChart !== undefined)
//     currentChart.style.display = "none";
//   if ( divid ) {
//     currentChart = document.getElementById(divid);
//     currentChart.style.display = "block";
//   }
//   else {
//     currentChart = undefined;
//   }
// }
