let flowers = ["flower1.svg", "flower2.svg", "flower3.svg", "flower4.svg", "flower5.svg", "flower6.svg", "flower7.svg", "flower8.svg", "flower9.svg", "flower10.svg", "flower11.svg"]

let bgcolors = ["#AEC0B8", "#DCD9D9", "#EBC9FF", "#FFE374", "#D3F2FF", "#FFD1FC", "#DCDDFF", "#F0EEE0","#f1f1f1", "#D1B2A1", "#faffca", "#D0FFD8", "#6CB4F3", "#DC42D2", "#DC42D2"]


let container = document.querySelector(".flowercontainer");
let body = document.body;
let heading = document.querySelector(".heading");
let highlights = document.querySelectorAll(".highlighted");
let navlinks = document.querySelectorAll("nav a");
let randFlower = flowers[Math.floor(Math.random()*flowers.length)];
let randBg = bgcolors[Math.floor(Math.random()*(bgcolors.length-1))];

// Set custom css property on document root
document.documentElement.style.setProperty('--bg-color', randBg);

// pick a random flower to put in the backgorund

pickFlower();

function pickFlower() {
  console.log(randFlower);
  let newItem = document.createElement("div");
  newItem.classList.add("flower");
  let flowerDiv = container.appendChild(newItem);
  flowerDiv.style.backgroundImage = "url(assets/imgs/" + randFlower;
  body.style.backgroundColor = randBg;
  heading.style.backgroundColor = randBg;

  highlights.forEach(function (highlight) {
    highlight.style.backgroundColor = randBg;
  });

  navlinks.forEach(function (navlink) {
    navlink.style.backgroundColor = randBg;
  });


const onMouseMove = (e) =>{
  flowerDiv.style.transform = "skew(" + e.clientX/20 + "deg)";
  flowerDiv.style.transform = "skew(" + e.clientY/50 + "deg)";
}
document.addEventListener('mousemove', onMouseMove);
}



