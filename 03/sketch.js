var timer=2
var posX = 0;
var dir = 1;
var vel = 0;
var ovni;
var pizza;
var posY= 500
var gogo = 1000

function preload(){
  ovni=loadImage ('babeimage/obni.png');
  pizza=loadImage ('babeimage/pizza.png');
}

var posXbabe = 1200;
function setup() {
  createCanvas(1200, 800);

frameRate(30);
}

function draw() {
  background(10,13,56);
  
  
  image(ovni,posXbabe,200);
  
  if (frameCount > 50 && frameCount < 200) {
    //ellipse(posXbabe, 200, 100, 100);
    fill(250,250,0,50)
    noStroke(0)
 quad(posXbabe+50,300,posXbabe+100,300,posXbabe+100,600,posXbabe-200,600)  
    
    image(pizza,posXbabe,posY);
    
posXbabe = posXbabe - 3;
posY= posY -1.2
    
  if(frameCount>200){ 
   image(pizza,gogo,posY)
  gogo=gogo-5}
}
  
// estrellitas
fill(200,219,180)
stroke(200,219,180,70)
strokeWeight(15)
    ellipse(700+timer,10-timer,5,5)
    ellipse(10,500-timer,15,15)
    ellipse(200-timer,560+timer,6,6)
    ellipse(600+timer,190+timer,8,8)
    ellipse(100-timer,800-timer,5,5)
    ellipse(800+timer,700+timer,10,10)
    ellipse(1000-timer,560-timer,6,6)
    ellipse(690+timer,600-timer,8,8)
    ellipse(150+timer,500+timer,5,5)
    ellipse(260+timer,560+timer,10,10)
    ellipse(800+timer,10+timer*2,5,5)
    ellipse(300+timer,500+timer,11,11)
    ellipse(200+timer,290-timer,14,14)
    ellipse(960+timer,300+timer,3,3)
    ellipse(120+timer,100+timer,7,7)
    ellipse(890-timer,720-timer,15,15)
    ellipse(1100-timer,760-timer,12,12)
    ellipse(820+timer,670-timer,4,4)
    ellipse(180+timer,400-timer,8,8)
    ellipse(380+timer,660+timer,20,20)
  
timer=timer+1
  if (timer<200){timer+1}
  if(timer>200){timer=-1}

  
// planetas
//planeta azul

posX = posX + vel * dir;
  
  if (posX >= 0 && posX < 150) {}
vel = 7;
    
  fill(80,180,250,70)
stroke(0)
  strokeWeight(1.5)
   ellipse(500-timer,300+timer,200,200)
  
fill(50,150,220)
   ellipse(500-timer,300+timer,180,180)
//planeta rosado
fill(255,156,236,50)

   ellipse(800-timer,500-timer,200,200)
fill(255,156,236)
   ellipse(800-timer,500-timer,150,150)
//anillos de saturno
  stroke(250,250,150,200)
  strokeWeight(10)
line(380-timer,300+timer,600-timer,350+timer)
    stroke(250,250,150,70)
  strokeWeight(20)
line(380-timer,300+timer,600-timer,350+timer)
// lunas de jupiter
  ellipse()
//estrellas fugaces

  
}