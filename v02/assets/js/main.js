$(function() {
  $('.main-carousel').flickity({
    // Options go here
    wrapAround: true,
    pageDots: false
  });

  var $carousel = $('.main-carousel').flickity({
    cellSelector: 'img',
    imagesLoaded: true,
    percentPosition: false
  });
  var $caption = $('.caption');
  // Flickity instance
  var flkty = $carousel.data('flickity');

  $carousel.on( 'select.flickity', function() {
    // set image caption using img's alt
    $caption.text( flkty.selectedElement.title )
  });

});
