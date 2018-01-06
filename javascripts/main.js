// Dropdown menu for mobile
$(document).ready(function()  {
  $('.dropdown').click(function() {
    $('.drop-menu').slideToggle('slow')
  })
})



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


var aos = [
  'fade-up-right',
  'fade-up-left',
  'fade-down-right',
  'fade-down-left',
  'flip-up',
  'flip-down',
  'flip-right',
  'flip-left',
  'zoom-in-down',
  'zoom-in-left',
  'zoom-in-right',
  'zoom-out-right',
  'zoom-out-left'
          ]

var aosLength =[
  '1500',
  '1000',
  '2000',
  '1200',
  '1700'
]


        // function to populate the galleries
function galPop(gal, name)  {
  $.each(gal, function(i, val) {
    var aosSelect= aos[Math.floor(Math.random()*aos.length)]   //Return a random scroll animation
    var aosLen = aosLength[Math.floor(Math.random()*aosLength.length)] //Return a random scroll animation duration

    var ham = $('.'+name+'-gal')
    var mainPath = '../../images/gallery/'+name+'/'
    var thumbPath = '../../images/gallery/'+name+'/thumbs/'
    $("<a href='"+mainPath+val+".jpg'><img class='tile' src='"+thumbPath+val+".jpg' data-aos='"+aosSelect+"' data-aos-duration='"+aosLen+"'/> </a>").appendTo(ham)
  })
}

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // Parallax function

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
