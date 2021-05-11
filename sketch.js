var background1,bow,greenimage,blueimage,redimage,pinkimage,pink,red,blue,green,arrow
var backgroundimage,bowimage,arrowImage;

function preload(){
  
backgroundimage=loadImage('background0.png')
bowimage=loadImage('bow0.png')
greenimage=loadImage('green_balloon0.png')
blueimage=loadImage('blue_balloon0.png');
redimage=loadImage('red_balloon0.png');
pinkimage=loadImage('pink_balloon0.png')
arrowImage=loadImage("arrow0.png")

}
function setup() {

createCanvas(600, 500);
background (220);  

//create background 
background1=createSprite(0,0,600,400)
background1.addImage('playground',backgroundimage)
background1.scale=3;

//create bow 
bow=createSprite(590,200,20,20)
bow.addImage('bow',bowimage)

  
  score =0


}
  
function draw() {

 
  
//ai
bow.y= World.mouseY;

background1.velocityX=-3
if (background1.x<0){
    
background1.x=background1.width/2

}

if (keyDown("space")){
Arrow()

}
  
var selectballoon=Math.round(random(1,4));
  
if (frameCount %80==0) {
if (selectballoon==1)  {
redballon ();

}

  if (selectballoon==2)  {
greenballon ();

}       

if (selectballoon==3)  {
blueballon ();

}

if (selectballoon==4)  {
pinkballon ();

}
                
}
 
drawSprites();      

}

function Arrow(){

arrow=createSprite(600,400,20,5)
arrow.addImage(arrowImage)
arrow.y=bow.y
arrow.velocityX=-8
arrow.scale=0.3
arrow.lifetime=120
}

function redballon () {

red=createSprite (0,0,20,20) 
red.velocityX=3; 
red.addImage (redimage) ; 
red.scale=0.1;  
red.y=Math.round(random(10,490));
red.lifetime=210
}

function greenballon(){

green=createSprite(0,50,20,20) ;
green.velocityX=3;
green.addImage(greenimage) ;
green.scale =0.1 ;
green .y=Math.round(random(10,490));
green.lifetime=210
}

function bluebalon () {

blue=createSprite (0,0,20,20) ;
blue.velocityX=3; 
blue.addImage (blueimage) ; 
blue.scale=0.1  ;
blue.y=Math.round(random(10,490));
blue.lifetime=210
}

function pinkballon(){

pink=createSprite(0,100,20,20) ;
pink.velocityX=3;
pink.addImage(pinkimage) ;
pink.scale =1.2 ;
pink.y=Math.round(random(10,490));
pink.lifetime=210

  text ("score:"+score,200,200);

  

}


// console.log (text.depth
 






