let flowers = ["flower1.svg", "flower2.svg", "flower3.svg", "flower4.svg", "flower5.svg", "flower6.svg", "flower7.svg", "flower8.svg", "flower9.svg"]

let bgcolors = ["#83918b", "#898989", "#ab93b9", "#c0a63e", "#a2d1e4", "#fbe3ff", "#acadd4", "#f1f1f1", "#83a261", "#faffca"]


let container = document.querySelector(".flowercontainer");
let footer = document.querySelector("footer");
let body = document.body;
let heading = document.querySelector(".heading");
let highlights = document.querySelectorAll(".highlighted");
let navlinks = document.querySelectorAll("nav a");
let randFlower = flowers[Math.floor(Math.random()*flowers.length)];
let randBg = bgcolors[Math.floor(Math.random()*(flowers.length-1))];

// Set custom css property on document root
document.documentElement.style.setProperty('--bg-color', randBg);

// pick a random flower to put in the backgorund

pickFlower();

function pickFlower() {
  console.log(randFlower);
  let newItem = document.createElement("div");
  newItem.classList.add("flowerFooter");
  let flowerDiv = footer.appendChild(newItem);
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



