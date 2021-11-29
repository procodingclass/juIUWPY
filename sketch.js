const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var bgImg, bottleImg;


var bottles = [
  { x: 200, y: 230, isAttached: true },
  { x: 300, y: 230, isAttached: false },
  { x: 400, y: 230, isAttached: false },
  { x: 500, y: 230, isAttached: false },
  { x: 600, y: 230, isAttached: false },
  { x: 700, y: 230, isAttached: false },

];

function preload() {
  bgImg = loadImage("./assets/bg.jpg");
  bottleImg = loadImage("./assets/bottle.png");
}

function setup() {
  createCanvas(950, 470);
  engine = Engine.create();
  world = engine.world;

  

  }

function draw() {
  background(bgImg);

  
  handleBottles();
   
}


function handleBottles() {
  addBottles();
  for (let i = 0; i < bottles.length; i++) {
      drawBottles(i);
      // Move the bottles
      bottles[i].x -= 1;
      //remove the bottles when they reach the unit
      if (bottles[i].x < 300) {
        //bottles.pop();
        //bottles.remove();
        //bottles.delete();
        //bottles.shift();
      }
  }
}


function drawBottles(i) {
  push();
  imageMode(CENTER);
  image(bottleImg, bottles[i].x, bottles[i].y, 100, 100);
  pop();
}

function addBottles() {
  // add new bottles into the array.
  if (bottles.length < 7) {
    // bottles.pop({x: 800,y: 230,});
    // bottles.push({x: 800,y: 230,});
    // bottles.add({x: 800,y: 230,});
    // bottles.create({x: 800,y: 230,});
  }
}


