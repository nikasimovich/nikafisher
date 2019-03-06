$(function() {
  let colors = ["#C1DDD6", "#0583CB", "#FFAFD0",  "#005246"];

  function sayHi(param1, param2, param3) {
    console.log('hello', param1, param2, param3);
  }

  function getRandomColor() {
    let color = colors[ Math.round( Math.random() * (colors.length - 1) ) ];

    return color;
  }

  console.log('color on load', getRandomColor());


$(".container").on('mousemove', function(event) {
  // let color = colors[ Math.round( Math.random() * (colors.length - 1) ) ];
  console.log( 'color on mousemove', getRandomColor() );
  $("body").css("background-color", getRandomColor() );
});

});
