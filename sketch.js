
//the obstacles are worlking they reset the amount of bananas who have is you touch it and they reset the monkey to that size

var monkey  ,  monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bscore
var ground
var backImg

function preload()
{
    //backgroung image
  back_Img = loadAnimation("jungle.jpg")
  
    //monkey running animation
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
    //banana and obstacle image
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() 
{
  createCanvas(600,400) 
  
    //create background sprite
  backImg = createSprite(20,75,20,50)
  backImg.addAnimation("running", back_Img)
  backImg.velocityX = -6;
  backImg.x = backImg.width /2;
  backImg.scale = 1.5
  
    //create monkey sprite
  monkey = createSprite(50,205,20,50)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.08
  
    //create ground sprite
  ground = createSprite(160,400,1200,20)
  ground.x = ground.width /2;
  ground.velocityX = -6;
  ground.visible = false;
  
  //createGroups
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0
  bscore = 0
}


function draw() 
{
  background(220)
  
   if(frameCount%30===0)
    {
      score = score + 1
    
    }
  
   //display score
  fill("black");
  stroke("black")
  text("S u r v i v a l  T i m e : "+ score, 300,25);
  
   if(frameCount%60===0)
    {
      score = score + 1
    
    }
  
  if(monkey.isTouching(bananaGroup))
    {
      bscore = bscore + 1
      bananaGroup.destroyEach()
    }
  
  //jump when the space button is pressed                  
    if(keyDown("space") && monkey.y > 200)
    {   
      monkey.velocityY = -15;
    }
  
    monkey.velocityY = monkey.velocityY + 1
  
    if (ground.x < 0) 
    {
      ground.x = ground.width / 2;
    }
    
    if (backImg.x < 0) 
    {
      backImg.x = backImg.width / 2;
    }
  
  monkey.collide(ground);
  
  switch(bscore)
    {
      case 1: monkey.scale = 0.1
        break;
       
       case 2: monkey.scale = 0.12
        break;
        
        case 3: monkey.scale = 0.14
        break;
       
        case 4: monkey.scale = 0.16
        break;
        
        case 5: monkey.scale = 0.18
        break;
       
        case 6: monkey.scale = 0.2
        break;
        
        case 7: monkey.scale = 0.22
        break;
       
        case 8: monkey.scale =0.24
        break;
        
        case 9: monkey.scale =0.26
        break;
        
        case 10: monkey.scale =0.28
        break;
        
        case 11: monkey.scale =0.30
        break;
        
        case 12: monkey.scale =0.32
        break;
        
        case 13: monkey.scale =0.34
        break;
        
        case 14: monkey.scale =0.36
        break;
        
        case 15: monkey.scale =0.38
        break;
        
        case 16: monkey.scale =0.40
        break;
        
        case 17: monkey.scale =0.42
        break;
        
        case 18: monkey.scale =0.44
        break;
        
        case 19: monkey.scale =0.46
        break;
        
        case 20: monkey.scale =0.48
        break;
        
        default: break;
    }
  
  if(monkey.isTouching(obstaclesGroup))
    {
      monkey.scale = 0.08
      bscore = 0
    }
  
  bananas();
  Obstacles();
  
  drawSprites();
  
  //display score
  fill("white");
  stroke("white")
  text("S u r v i v a l  T i m e : "+ score, 400,25);
  
  //display score
  fill("white");
  stroke("white")
  text("B a n a n a s : "+ bscore, 50,25);
}


function bananas()
{
  if(frameCount%100===0)
  { var r=random(100,375)
    var banana = createSprite(650,r,20,20)
    banana.velocityX=-6
    banana.addImage("b_1" , bananaImage)
    banana.scale=0.7
   banana.depth=monkey.depth
   monkey.depth=monkey.depth+1
    
     //assign scale and lifetime to the obstacle 
   banana.scale = 0.1
   banana.lifetime = 400
   
   bananaGroup.add(banana)
  }
}


function Obstacles(){
 if (frameCount % 120 === 0)
 {
   var obstacle = createSprite(650,375,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage("o1", obstacleImage)
     
     //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 400;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}



