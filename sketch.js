
var mon,mon_fly;
var ground, groundImage;
var cloud,cloudImage,cloudGroup;
var girl,girlImage, girlJump;
var invisibleG;

function preload(){
    mon_fly=
    loadAnimation("images/mons1.png","images/mons2.png","images/mons3.png","images/mons4.png")
    cloudImage=loadImage("images/thecloud1.png");
girlImage=loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl6.png","images/girl7.png","images/girl8.png")
    groundImage=loadImage("images/ground.png")
  girlJump=loadAnimation("images/girl12.png","images/girl13.png","images/girl14.png")
}


function setup(){
    createCanvas(1200,600)
    

    mon=createSprite(50,250,20,50);
    mon.addAnimation("flying",mon_fly);
    mon.scale=0.5;

    ground=createSprite(600,525,2400,800)
    ground.addImage(groundImage);
    ground.shapeColor="#814D25"
    ground.velocityX=-3
    ground.scale=3
    
   invisibleG=createSprite(600,535,2400,100)
   invisibleG.visible=false;

    girl=createSprite(200,390,20,50);
    girl.addAnimation("running",girlImage);
    girl.addAnimation("jumping", girlJump)
     girl.scale=0.5

   cloudGroup=createGroup()
    
    
}

function draw(){
    background("#B7EDEF");

   if(ground.x<0){
       ground.x=ground.width/2
   }
 
   if(keyDown("space")){
       girl.velocityY=-10
       girl.changeAnimation("jumping",girlJump);
   }

   girl.velocityY=girl.velocityY+0.8

   girl.collide(invisibleG)



spawnClouds()
    drawSprites()
}

function spawnClouds(){
if(frameCount% 250===0){
   
     cloud=createSprite(1200,50,50,50)
     cloud.shapeColor="white"
     cloud.y=Math.round(random(50,150));
     cloud.addImage(cloudImage);
     cloud.velocityX=-2;
     cloud.scale=0.4

     mon.depth=cloud.depth+1;

     cloud.lifetime=600;
    
     cloudGroup.add(cloud)
}
}