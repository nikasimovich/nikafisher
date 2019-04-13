let colors = ["#FAC6E5", // bright pink
              "#D1B6FF", //lavender
              "#8155A0", //bright purple
              "#FFC2B9", //coral
              "#C7D8DB", //pale robins egg
              "#BCBBDA", //pale purplish blue
              "#95A8CB", //cool blue
              "#FAC6E5", //brighter pink
              "#FFDFEF", //dusty rose
              "#DBC7D4" //lavender
];
let i;
let circles = [];



function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.class("canvas");

for (i = 0; i < 6; i++) {
    circles[i] = new Circle();
  }
}

function draw() {
  for (i = 0; i < circles.length; i++) {
    circles[i].display();
   }
}

function Circle() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.diameter = random(200, 685);
    let randCol = round(random([0], [colors.length - 1]));
    let chooseCol = colors[randCol];

  this.display = function() {
      //set the fill to be a random number from the array
        fill(color(chooseCol));
        blendMode(LIGHTEST);
        noStroke();
        ellipse(this.x, this.y, 685, 685);
  }

  this.move = function() {
    this.x = this.x + random(-200,200);
    this.y = this.y + random(-200, 200);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


$(function() {
  $('a').mouseenter(function() {
   clear();
   for (i = 0; i < 6; i++) {
       circles[i] = new Circle();
     }
  });
});





// //choose a random color from my colors array
// for (i = 0; i < 6; i++) {
//   //set the fill to be a random number from the array
//     let randX = random(0, width);
//     let randY = random(0, height);
//     let randCol = round(random([0], [colors.length - 1]));
//     let chooseCol = colors[randCol];
//     fill(color(chooseCol));
//     blendMode(BURN);
//     console.log("randCol is " + randCol);
//     console.log("randX is " + randX);
//     console.log("randY is " + randY);
//     noStroke();
//     circles = ellipse(randX, randY, 685,685);
//     circles.move();
//    }
