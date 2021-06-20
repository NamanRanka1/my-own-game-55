class Game {
    constructor(){
    
    }
    
    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
    
    }
    
    update(state){
    database.ref('/').update({
    gameState: state
    });
    }
    
  async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        }
        form = new Form()
        form.display();
        }
    pl1=createSprite(400,400);
   pl1.addAnimation("standing",anime1);
    
  
 // pl1.addAnimation("running",anime1l);
 //pl1.addAnimation("running",anime1r);

  pl2=createSprite(600,400,50,50);

  plINDEX=[pl1,pl2]
}

play(){
  form.hide();

  Player.getPlayerInfo();
  
 
  
  if(allPlayers !== undefined){
 //background(rgb(198,135,103));
 // image(gamebg,-displayWidth*4,0,0, 0);

  
  var index=0;
  
  var x=400;
  
  for(var plr in allPlayers){
  //add 1 to the index for every loop
  index = index + 1 ;
  

  
 
  //use data form the database to display the cars in y direction
  x = displayWidth- allPlayers[plr].x;
  plINDEX[index-1].x = x;
 // plINDEX[index-1].y = y;
   console.log(pl1.y)
  
  
  if (index === player.index){
  
  camera.position.x = plINDEX[index-1].x;
  camera.position.y = displayHeight/2;
  
  }
  
  //textSize(15);
  //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
  }
  
  }
  
  if(keyDown(LEFT_ARROW) ){
  pl1.x -=5;
  
  //pl1.changeAnimation("running",anime1l)
  player.update();
  }

  if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    player.x +=5;
    pl1.changeAnimation("running",anime1r)
    player.update();
    }
    
  
  drawSprites();
  
  

}
}

