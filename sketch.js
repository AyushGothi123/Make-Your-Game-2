var database;
var back_img;
var allPlayers;


var player, form,game;
var player1,player2;
var players;
var playerImg;
var supplies;
var supplyGroup;
var supply1_img, supply2_img, supply3_img, supply4_img;
function preload(){

  playerImg = loadImage("images/Box.jpg")
backImg = loadImage("images/background.jpg")
breadImg = loadImage("images/Bread.png")
milkImg = loadImage("images/Milk.jpg")
bananaImg = loadImage("images/banana2.png")
appleImg = loadImage("images/apple2.png")

supplyGroup = new Group();

}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  
  player1 = createSprite(200,500);
  player1.addImage("player1",playerImg);
  player1.scale = 0.5;
  
  player2 = createSprite(800,500);
  player2.addImage("player2", playerImg);
  player2.scale = 0.5;
  
}

function draw(){
background(backImg)


  

  drawSprites();
}