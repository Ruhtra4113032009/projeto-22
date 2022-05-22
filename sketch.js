const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage, playerArcherimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 300, 200, 150, options);
  World.add(world, playerBase);

  playerArcher = Bodies.rectangle(300, 140, 20, 20, options);
  World.add(world, playerArcher);

  player = Bodies.rectangle(250, 140, 50, 180, options);
  World.add(world, player);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  image(baseimage, 200, 300, 200, 150);
  image(playerimage, 250, 140, 50, 180);
  image(playerArcherimage, 300, 140, 20, 20);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
