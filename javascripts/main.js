
        // Image names to populate the galleries

var photography = [
  'chinese-boy',
  'train',
  'seven-fal',
  'dia-bw',
  'doonbeg',
  'gorilla-baby',
  'rochester-green',
  'les-brick',
  'peacock',
  'infinity-pool',
  'roads-rome'
]

var blackWhite = [
  'dancer-rock',
  'denver-pan',
  'marc-wedding',
  'maria-nice',
  'mining-hotel',
  'mining',
  'opera-house',
  'plaza-bw',
  'rower-bw',
  'rrtracks',
  'snow-bird',
  'valparaiso-wall'
]

var photoPaintings = [
  'bike-window',
  'bmoor-shop',
  'climber',
  'denver-les-house',
  'fao-schwartz',
  'lily',
  'maria-shop',
  'oia-church',
  'radishs',
  'seattle-ferris',
  'sea-painter',
  'Seattleabstract',
  'sixteenth',
  'stonetown',
  'times-square',
  'vail',
  'walkers-dcmall'
]

var favorites = [
  'Groznjan-croatia',
  'dolce',
  'doonbeg-pain',
  'oia',
  'lambs',
  'oai-night',
  'santiago-model',
  'rome-sunset',
  'vail-apres'
]




        // function to populate the galleries
function galPop(gal, name)  {
  $.each(gal, function(i, val) {
    var ham = $('.'+name+'-gal')
    var mainPath = '../../images/gallery/'+name+'/'
    var thumbPath = '../../images/gallery/'+name+'/thumbs/'
    $("<a href='"+mainPath+val+".jpg'><img class='tile' src='"+thumbPath+val+".jpg'/> </a>").appendTo(ham)
})}










// '../images/gallery/photography/thumbs/chinese-boy.jpg',
// '../images/gallery/photography/thumbs/train.jpg',
// '../images/gallery/photography/thumbs/seven-fal.jpg',
// '../images/gallery/photography/thumbs/dia-bw.jpg',
// '../images/gallery/photography/thumbs/doonbeg.jpg',
// '../images/gallery/photography/thumbs/gorilla-baby.jpg',
// '../images/gallery/photography/thumbs/rochester-green.jpg',
// '../images/gallery/photography/thumbs/les-brick.jpg',
// '../images/gallery/photography/thumbs/peacock.jpg',
// '../images/gallery/photography/thumbs/infinity-pool.jpg',
// '../images/gallery/photography/thumbs/roads-rome.jpg'









$(document).ready( function()  {
  // function loadImage (images, imgContainer) {
  //   for(var i=0; i<images.length; i++)  {
  //     $(imgContainer).append("<a href='../../images/gallery/photography/" +images[i]+".jpg' <img class='tile' src='../../images/gallery/photography/thumbs/" +images[i]+".jpg'></a>")
  //
  //     console.log(images[i])
  //
  //   }
  // }
  // loadImage(photography, ".photographygal")

// $("#slider").twentytwenty();
})









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
