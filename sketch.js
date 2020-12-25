
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground;
var gameState='PLAY'

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
 
}



function setup() {
  
  monkey = createSprite(40,315,20,20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale =0.1;
  
  ground = createSprite(400,350,900,10)
  
  
  
}


function draw() {
  
  background('white')
  monkey.collide(ground)
  
  console.log(score)
 if (gameState==='PLAY'){ 
  if(keyDown('space')&&monkey.y>300){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  if(FoodGroup.isTouching(monkey)){
     score=score+1
     FoodGroup.destroyEach()
   }
   if(obstacleGroup.isTouching(monkey)){
    
     
     gameState='END'
   }
  
 } 
 if (gameState==='END'){
    banana.velocityX=0
     obstacle.velocityX=0
     
     banana.lifetime=-1
     obstacle.lifetime=-1
 }
  
  
  
  drawSprites();
  bananaSpawn();
  obstacleSpawn();
  textSize(20)
  fill('red')
  text("Score:"+score,15,15)
}

function bananaSpawn(){
  if (frameCount%140===0){
   rand=random(180,250)
   banana=createSprite(400,200,10,10)
   banana.y=rand
   banana.addImage(bananaImage)
   banana.scale=0.1
    
   banana.velocityX=-(3+score/100)
   banana.lifetime=150
    
   FoodGroup.add(banana);
   
   
  }
  
}
function obstacleSpawn(){
  if (frameCount%120===0){
   
   obstacle=createSprite(400,327,10,10)
   
   obstacle.addImage(obstacleImage)
   obstacle.scale=0.1
    
   obstacle.velocityX=-(5+score/100)
   obstacle.lifetime=150
    
   obstacleGroup.add(obstacle);
   
   //obstacle.debug=true  
   obstacle.setCollider("circle",0,0,100)
  }
  
}




