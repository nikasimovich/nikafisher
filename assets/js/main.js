$(function() {
  var $carousel = $('.main-carousel');
  var $slides = $carousel.find('.carousel-cell');
  var slideLength = $slides.length;
  var $firstSlide = $slides.first();
  var $caption = $('.caption');
  var $counter = $('.counter');
  var $videos = $carousel.find('video');
  var $backgroundEven = $('.background-element--even');
  var $backgroundOdd = $('.background-element--odd');
  var $carouselNavPrevious = $('.carousel-nav--previous');
  var $carouselNavNext = $('.carousel-nav--next');

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

    $caption.html( $slide.attr('data-caption') );

    $otherVideos.each(function() {
      this.pause();
    });

    $caption.html( $slide.attr('data-caption') );

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

    $counter.html((index + 1) + ' / ' + slideLength);
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

  $carouselNavPrevious.on('click', function() {
    $carousel.flickity('previous').focus();
  });

  $carouselNavNext.on('click', function() {
    $carousel.flickity('next').focus();
  });

  slideCallback($firstSlide, 0);

  var $maxHeightElements = $('.vh-size');
  var setMaxHeight = function() {
    $maxHeightElements.css({ height: window.innerHeight });
  };

  // Set height in javascript to avoid VH issues on mobile devices
  $(window).on('resize', function() {
    setMaxHeight();
  });

  setMaxHeight();
});
