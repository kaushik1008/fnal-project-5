
var bg,bgimg,heroimg,hero,ghostimg,manimg
var score;
var ghostGroup,manGroup
function preload(){
  bgimg=loadImage("horror.jpg")
  heroimg=loadAnimation("Hero/hero1.gif","Hero/hero2.gif","Hero/hero3.gif","Hero/hero4.gif","Hero/hero5.gif","Hero/hero6.gif","Hero/hero7.gif","Hero/hero8.gif","Hero/hero9.gif")
  heroimg=loadAnimation("Hero.gif")
  ghostimg=loadAnimation("ghost/ghost1.gif","ghost/ghost2.gif","ghost/ghost3.gif","ghost/ghost4.gif","ghost/ghost5.gif","ghost/ghost6.gif")
 //miniimg=loadAnimation("mini/mini1.gif","mini/mini2.gif")
 manimg=loadAnimation("zombie/zombie1.gif","zombie/zombie2.gif","zombie/zombie3.gif","zombie/zombie4.gif","zombie/zombie5.gif","zombie/zombie6.gif","zombie/zombie7.gif","zombie/zombie8.gif","zombie/zombie9.gif")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(displayWidth/2,displayHeight/2);
  bg.scale=1.0
  bg.addImage(bgimg)

  hero=createSprite(165,450,20,20)
  hero.addAnimation("running",heroimg)
  hero.debug=true

ground=createSprite(10,620,3000,20)
ground.visible=false;

ghostGroup=new Group()
manGroup=new Group()
score=0
}

function draw() {
  background("white"); 
  
if(keyDown("space")){
  hero.velocityY=-2
}

hero.velocityY=hero.velocityY+0.5
/*if(keyDown("up")){
  hero.y=hero.y-2
}

if(keyDown("down")){
  hero.y=hero.y+2
}*/

if(ghostGroup.isTouching(hero)){
  score=score+10
}

hero.collide(ground)

spawnGhost();
spawnman();
  drawSprites();
  fill("white") 
  text("Score:"+score,2000,500)
}

function spawnGhost(){
 if(frameCount%100===0){
   var ghost=createSprite(3000,450,5,5)
   ghost.addAnimation("walking",ghostimg)
   ghost.y=Math.round(random(200,550))
   ghost.velocityX=-5
   ghost.scale=0.2
   ghostGroup.add(ghost)
   ghost.debug=true
 }
}

function spawnman(){
  if(frameCount%250===0){
    var man=createSprite(6000,450,5,5)
    man.addAnimation("attack",manimg)
    man.velocity=-5;
    man.scale=0.2
    manGroup.add(man)
  }
}