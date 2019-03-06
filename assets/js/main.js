$(function() {
  let colors = ["#1D4DAD", "#D35F79", "#A62E29",  "#A59187", "#E37F8B", "#2C3B51", "#001F4E", "#133924", "#6B326F"];

  function sayHi(param1, param2, param3) {
    console.log('hello', param1, param2, param3);
  }


$("a").mouseenter( function(event) {
  let color = colors[ Math.round( Math.random() * (colors.length - 1) ) ];
  console.log('color on mousemove', color);
  $("body").css("background-color", color);
});

});

// runs everytime you move the mouse on the link
// $(function() {
//   let colors = ["#C1DDD6", "#0583CB", "#FFAFD0",  "#005246"];

//   function sayHi(param1, param2, param3) {
//     console.log('hello', param1, param2, param3);
//   }


// $("a").on('mousemove', function(event) {
//   let color = colors[ Math.round( Math.random() * (colors.length - 1) ) ];
//   console.log('color on mousemove', color);
//   $("body").css("background-color", color);
// });

// });
