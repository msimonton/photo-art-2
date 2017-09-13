// 
// var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
//
// var targetSVG = "M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625";
//
//
// var map = AmCharts.makeChart("chartdiv", {
//
//     "type": "map",
//     "theme": "none",
//     "pathToImages": "https://www.amcharts.com/lib/3/images/",
//
//     "dataProvider": {
//      "map": "worldLow",
//      "lines": [ {
//        "id": "line1",
//        "arc": -0.85,
//        "alpha": 0.3,
//        "latitudes": [ 39.7392, 41.0082, -6.7924, -6.1357, 25.2048, -33.8688, -45.0312, 37.5665  ],
//        "longitudes": [ -104.9903, 28.9784, 39.2083, 39.3621, 55.2708, 151.2093, 168.6626, 126.9780 ]
//      }, {
//        "id": "line2",
//        "alpha": 0,
//        "color": "#000000",
//        "latitudes": [ 39.7392, 41.0082, -6.7924, -6.1357, 25.2048, -33.8688, -45.0312, 37.5665 ],
//        "longitudes": [ -104.9903, 28.9784, 39.2083, 39.3621, 55.2708, 151.2093, 168.6626, 126.9780 ]
//      } ],
//
//      "images": [{
//        "svgPath": planeSVG,
//        "positionOnLine": 0,
//        "color": "#000000",
//        "alpha": 0.1,
//        "animateAlongLine": true,
//        "lineId": "line2",
//        "flipDirection": false,
//        "loop": true,
//        "scale": 0.03,
//        "positionScale": 1.6
//      }, {
//        "svgPath": planeSVG,
//        "positionOnLine": 0,
//        "color": "#585869",
//        "animateAlongLine": true,
//        "lineId": "line1",
//        "flipDirection": false,
//        "loop": true,
//        "scale": 0.03,
//        "positionScale": 2.8
//      } ],
//
//   "areas": [{
//       "id": "US",
//       "zoomLevel": 4,
//       "images": [{
//         "svgPath": targetSVG,
//         "labelPosition": "bottom",
//         "latitude": 39.7392,
//         "longitude": -104.9903,
//         "width": 52,
//         "height": 52,
//         "outlineColor": "white",
//         "rollOverColor": "#2b396c",
//         label: "Denver",
//         // labelColor: "#fff",
//         "description": "<h3 class='location-head'>Denver</h3><a href='gallery.html'><img class='map-test' src='../images/trips/liz-airport.jpg'/></a>",
//         // "descriptionWindowHeight": 600,
//         // "descriptionWindowWidth": 10000,
//         "descriptionWindowTop": 30,
//         "descriptionWindowLeft": 25,
//         "zoomLevel": 7,
//
//           }]
//         },
//         {
//         "id": "TR",
//         "zoomLevel": 20,
//         "images": [{
//           "svgPath": targetSVG,
//           "labelPosition": "bottom",
//           label: "Istanbul",
//           "latitude": 41.0082,
//           "longitude": 28.9784,
//           width: 32,
//           height: 32,
//           // labelColor: "#fff",
//           "description": "<div class='my-slider-two'><div class='slide'><img class='slide-img' src='../images/lambies.jpg'/></div><div class='slide'><img class='slide-img' src='../images/plaza.jpg'/></div></div>",
//           "zoomLevel": 25,
//           "descriptionWindowTop": 30,
//           "descriptionWindowLeft": 25,
//         }]
//       },
//
//         {
//         "id": "TZ",
//         "zoomLevel": 50,
//         "images": [{
//           label: "Dar es Salaam",
//           "svgPath": targetSVG,
//           "labelPosition": "bottom",
//           "latitude": -6.7924,
//           "longitude": 39.2083,
//           width: 32,
//           height: 32,
//           // labelColor: "#fff",
//           "description": "<h3 class='location-head'>Dar es Salaam</h3><a href='gallery.html'><img class='map-test' src='../images/trips/arusha/africasureal-project.jpg'/><img class='map-test' src='../images/trips/arusha/masaii-Project.jpg'/><img class='map-test' src='../images/trips/arusha/rhino-collage.jpg'/><img class='map-test' src='../images/trips/arusha/rhinos-frame.jpg'/><img class='map-test' src='../images/trips/arusha/safari-collage.jpg'/><img class='map-test' src='../images/trips/arusha/skip-safari-breakfast.jpg'/><img class='map-test' src='../images/trips/arusha/trer-egrites.jpg'/><img class='map-test' src='../images/trips/arusha/waterbuffalo-tanzania.jpg'/><img class='map-test' src='../images/trips/arusha/zebras-distorted.jpg'/></a>",
//           "zoomLevel": 55,
//           "descriptionWindowTop": 30,
//           "descriptionWindowLeft": 25,
//         },
//         {
//           label: "Zanzibar Island",
//           "svgPath": targetSVG,
//           "labelPosition": "bottom",
//           "latitude": -6.1357,
//           "longitude": 39.3621,
//           width: 32,
//           height: 32,
//           // labelColor: "#fff",
//           "description": "<h3 class='location-head'>Zanzibar Island</h3><a href='gallery.html'><img class='map-test' src='../images/trips/zanzibar/balance.JPG'/><img class='map-test' src='../images/trips/zanzibar/liz-fish.jpg'/><img class='map-test' src='../images/trips/zanzibar/skip-fish.JPG'/><img class='map-test' src='../images/trips/zanzibar/stonetown-street-scene.jpg'/><img class='map-test' src='../images/trips/zanzibar/zanzibar-sunset800.jpg'/></a>",
//           "zoomLevel": 55,
//           "descriptionWindowTop": 30,
//           "descriptionWindowLeft": 25,
//             }]
//           },
//
//
//           {
//           "id": "AE",
//           "zoomLevel": 20,
//           "images": [{
//             label: "Dubai",
//             "svgPath": targetSVG,
//             "labelPosition": "bottom",
//             "latitude": 25.2048,
//             "longitude": 55.2708,
//             width: 52,
//             height: 32,
//             // labelColor: "#fff",
//             "description": "<h3 class='location-head'>Dubai</h3><a href='gallery.html'><img class='map-test' src='../images/union-station.jpg'/><img class='map-test' src='../images/grand-hotel.jpg'/><img class='map-test' src='../images/denver-blur.jpg'/></a>",
//             "zoomLevel": 25,
//             "descriptionWindowTop": 30,
//             "descriptionWindowLeft": 25,
//           }]
//           },
//
//
//           {
//           "id": "AU",
//           "zoomLevel": 10,
//           "images": [{
//             "svgPath": targetSVG,
//             "labelPosition": "bottom",
//             label: "Sydney",
//             "latitude": -33.8688,
//             "longitude": 151.2093,
//             width: 32,
//             height: 32,
//             // labelColor: "#fff",
//             "description": "<h3 class='location-head'>Sydney</h3><a href='gallery.html'><img class='map-test' src='../images/trips/sydney/sydney-australia.jpg'/><img class='map-test' src='../images/trips/sydney/sydney-bridge.jpg'/><img class='map-test' src='../images/trips/sydney/sydney-opera-house-2.jpg'/><img class='map-test' src='../images/trips/sydney/sydney-opera-house.jpg'/></a>",
//             "zoomLevel": 15,
//             "descriptionWindowTop": 30,
//             "descriptionWindowLeft": 25,
//           }]
//           },
//
//         {
//         "id": "NZ",
//         "zoomLevel": 10,
//         "images": [{
//           "title": "euk",
//           label: "Queenstown",
//           "svgPath": targetSVG,
//           "labelPosition": "bottom",
//           "latitude": -45.0312,
//           "longitude": 168.6626,
//           width: 32,
//           height: 32,
//           // labelColor: "#fff",
//           "description": "<h3 class='location-head'>Queenstown</h3><a href='gallery.html'><img class='map-test' src='../images/trips/queenstown/plane-tail.JPG'/><img class='map-test' src='../images/trips/queenstown/plane-wing.JPG'/><img class='map-test' src='../images/trips/queenstown/posts.JPG'/><img class='map-test' src='../images/trips/queenstown/queenstown-rock-skipping.jpg'/><img class='map-test' src='../images/trips/queenstown/queenstown-sunset.jpg'/><img class='map-test' src='../images/trips/queenstown/tasting-NZ.jpg'/><img class='map-test' src='../images/trips/queenstown/us-boat.JPG'/><img class='map-test' src='../images/trips/queenstown/us-mountain.JPG'/><img class='map-test' src='../images/trips/queenstown/Worries-blessings.jpg'/></a>",
//           "zoomLevel": 15,
//           "descriptionWindowTop": 30,
//           "descriptionWindowLeft": 25,
//         }]
//         },
//
//       {
//       "id": "KR",
//       "zoomLevel": 20,
//       "images": [{
//         label: "Seoul",
//         "svgPath": targetSVG,
//         "labelPosition": "bottom",
//         "latitude": 37.5665,
//         "longitude": 126.9780,
//         width: 32,
//         height: 32,
//         // labelColor: "#fff",
//         "description": "<h3 class='location-head'>Seoul</h3><a href='gallery.html'><img class='map-test' src='../images/union-station.jpg'/><img class='map-test' src='../images/grand-hotel.jpg'/><img class='map-test' src='../images/denver-blur.jpg'/></a>",
//         "zoomLevel": 25,
//         "descriptionWindowTop": 30,
//         "descriptionWindowLeft": 25,
//       }]
//       }
//
//   ]
//
//     },
//     "areasSettings": {
//         // "autoZoom": true,
//         "color": "#a9b2dd",
//         "selectedColor": "#a9b2dd",
//         "rollOverOutlineColor": "#fff",
//         "rollOverColor": "#2b6295"
//         // "selectedColor": "#CC0000"
//     },
//
//     "imagesSettings": {
//       "labelRollOverColor": "#000",
//       "color": "#585869",
//       "rollOverColor": "#585869",
//       "selectedColor": "#585869",
//       "pauseDuration": 0.2,
//       "animationDuration": 2.5,
//       "adjustAnimationSpeed": false,
//       "bringForwardOnHover": true,
//     },
//
//     "linesSettings": {
//       "color": "#585869",
//       "alpha": 0.4,
//       "bringForwardOnHover": false
//     },
// });










$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});
