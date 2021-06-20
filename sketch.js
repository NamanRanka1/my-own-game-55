var database;
var form,player,game;
var gameState=0;
var playerCount=0;
var bg,gb;//
var pl1,pl2,plINDEX,backg;
var allPlayers=0;
var anime1,anime1l,anime1r,formbg,gamebg;
var formSprite;
var allPlayers;

function preload(){

    anime1=loadAnimation("images/player1/p1.png");
    anime1l=loadAnimation("images/p1l/n11.png","images/p1l/n12.png","images/p1l/n13.png","images/p1l/n14.png","images/p1l/n15.png","images/p1l/n16.png","images/p1l/n17.png");
    anime1r=loadAnimation("images/pl2r/namu1.png","images/pl2r/namu2.png","images/pl2r/namu3.png","images/pl2r/namu4.png","images/pl2r/namu5.png","images/pl2r/namu6.png","images/pl2r/namu7.png","images/pl2r/namu8.png");
    formbg=loadImage("images/fORMbg.png");
    gamebg=loadImage("images/gAMEbg.jpg");
}

function setup(){

createCanvas(displayWidth-170,displayHeight-200);

database=firebase.database();

game=new Game();
game.start();




}

function draw(){

  
    //background(formbg)

    if(playerCount===2){
        game.play();
      //  background(gamebg);
    }

}