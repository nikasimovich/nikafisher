var randPos;
var width = $( window ).width();
var height = $( window ).height();
var cards = $( ".card-holder");
var checkers = $( ".checkers");
var newElements;
var xstep = 10;
var ystep = 20;

$(function() {

  for (var i = 0; i < 10; i++) {
    randPos = Math.floor(Math.random() * width) + 1 ;
    randYpos = Math.floor(Math.random() * height) + 1 ;
    newElements = cards.clone().insertAfter(cards);
    $(newElements).each(function(){
      $(this).css("top", randPos);
      $(this).css("left", randYpos);
      console.log(i);
    })
  }
});


// $(cards).animate({
//   width: randPos,
//   height: randPos,
// }, 10000 );
