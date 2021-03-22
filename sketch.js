const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint


var myworld,myengine,ground,ball;
var box1,box2,Pig1,Pig2,log1,log2,log3,log4;
var bk;
var platform,log5
var rope,rope2
var gameState=1
var score=0

function preload(){

time()
bk2=loadImage("sprites/bg.png")
pigs=loadSound("sprites/pig.mp3")
sb=loadSound("sprites/select.mp3")
flyb=loadSound("sprites/fly.mp3")
}
function setup() {
  createCanvas(1000,600);
  myengine=Engine.create();
  myworld=myengine.world; 

 box1=new Box(700,570,70,70)
box2=new Box(900,570,70,70)
ground=new Ground(500,600,1000,20)
Pig1=new Pig(800,580,50,50)
log1=new Log(800,560,20,300,PI/2)
box3=new Box(700,550,70,70)
box4=new Box(900,550,70,70)
Pig2=new Pig(800,550,50,50)
log2=new Log(800,350,20,300,PI/2)
box5=new Box(800,300,70,70)
log3=new Log(750,300,20,150,PI/4)
log4=new Log(850,300,20,150,3*PI/4)
bird1=new bird(170,300,50,50)
platform=new Ground(120,500,250,200)
//log5=new Log(200,200,20,100,PI/2)
rope=new chain(bird1.body,{x:170,y:250})
//rope2=new chain(Pig1.body,box1.body)

}

function draw() {
  if(bk!=null){
  background(bk);
  }
  else{background(bk2)}
  text("score-"+score,900,100)
  Engine.update(myengine)
  box1.display()
  box2.display()
  Pig1.display()
  log1.display()
  box3.display()
  box4.display() 
  Pig2.display() 
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird1.display()
  rope.display()
  Pig1.score(
  Pig2.score()
  )
  //rope2.display()
  
  ground.display()
  platform.display()
  //log5.display()
  

}
function mouseDragged(){
  if (gameState===1){

  
Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}}
function mouseReleased(){
  rope.fly()
  flyb.play()
  gameState=2
}
function keyPressed(){
if(keyCode===82&&bird1.body.speed<6){
  gameState=1
  sb.play()
  
  bird1.path=[]
  Matter.Body.setPosition(bird1.body,{x:140,y:200})
  rope.attach(bird1.body)
}
}

async function time(){
var data=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var datajson=await data.json()
console.log(datajson)
var dp=datajson.datetime
console.log (dp)
var hour=dp.slice(11,13)
console.log(hour)
if (hour>=06&&hour<=20){
  bk=loadImage("sprites/bg.png")
}
else{
bk=loadImage("sprites/bg2.jpg")
}}











