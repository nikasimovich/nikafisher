$(function() {
  var $carousel = $('.main-carousel');
  var $firstSlide = $carousel.find('.carousel-cell').first();
  var $caption = $('.caption');
  var $videos = $carousel.find('video');
  var $backgroundEven = $('.background-element--even');
  var $backgroundOdd = $('.background-element--odd');

  $carousel.flickity({
    // Options go here
    wrapAround: true,
    pageDots: false
  });

  // Flickity instance
  var flkty = $carousel.data('flickity');

  var slideCallback = function($slide, index) {
    var $video = $slide.find('video');
    var $otherVideos = $videos.not( $video );
    var background = $slide.attr('data-bg-style');

    $caption.text( $slide.attr('data-caption') );

    $otherVideos.each(function() {
      this.pause();
    });

    $caption.text( $slide.attr('data-caption') );

    if ( $video.length ) {
      var video = $video.get(0);

      video.play();
    }

    if ( index % 2 == 0 ) {
      // even index
      $backgroundEven.css('background', background).addClass('active');
      $backgroundOdd.removeClass('active');
    } else {
      // odd index
      $backgroundOdd.css('background', background).addClass('active');
      $backgroundEven.removeClass('active');
    }
  };

  $carousel.on( 'select.flickity', function() {
    var $slide = $(flkty.selectedElement);

    slideCallback($slide, flkty.selectedIndex);
  });

  $carousel.on( 'staticClick.flickity', function() {
    var $slide = $(flkty.selectedElement);
    var $video = $slide.find('video');

    if ( !$video.length ) return;

    var video = $video.get(0);

    if ( video.paused ) {
      video.play();
    } else {
      video.pause();
    }
  });


  slideCallback($firstSlide, 0);
});
