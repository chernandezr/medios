     //MODIFY BACKGROUNG COLOR
var backcolorR = 255
var backcolorG = 200
var backcolorB = 200
   // MODIFY RAY COLOR IN RGB
var colorR = 100
var colorG = 100
var colorB = 100
var rotadora = 0;

   //cambioEstado WILL MODIFY latido
var cambioEstado = 0
var latido = 0

function setup() {
 createCanvas(800, 600);
 angleMode(DEGREES);

}  //THIS CLOSE SETUP FUNCTION

function draw() {

 background(backcolorR,backcolorG,backcolorB);
  
    //VARIABLE THAT MOVE THE ALL BY BABEHOURS
var babehours = hour; //(sí HOUR no esta en setup o draw no se define)
// ROTATIONS, 
 push();
 translate(width/2, height);
 rotate(rotadora);
  noStroke(0);
 fill(colorR,colorG,colorB,90);
 rect(30,0,800,800);
 rect(50,20,800,800);
  
 pop();
  noStroke(0);
  //ELLIPSES AROUND "CORAZON"
var priColor1 =200 - babehours*2
var priColor2 =255 - babehours*5
var priColor3 =100 + babehours
   fill(255,255,255,90);
 ellipse (width/2,500,400-latido,400);
 ellipse (width/2,500,350-latido,350);
 ellipse (width/2,500,300-latido,300);
 ellipse (width/2,500,250-latido,250);  
rotadora = rotadora + cambioEstado;
// CORAZON AND LATIDOS (here are "corazon" vertex and variables for "latidos")  
  fill(255,0,0)
  beginShape();
vertex(400, 453-latido); //(solo en y)
vertex(372-latido, 418-latido);
vertex(337-latido, 418-latido);
vertex(314-latido, 440-latido);
vertex(327-latido, 494-latido);
vertex(374-latido, 550-latido);
vertex(400,575+latido) //(solo y)
vertex(427+latido, 550-latido);
vertex(472+latido, 494-latido);
vertex(488+latido, 450-latido);
vertex(463+latido, 418-latido);
vertex(427+latido, 418-latido);
endShape(CLOSE);
  
  latido= latido + cambioEstado
if(20<latido){latido=0}
  
if(mouseIsPressed){
  //IF'S TO MODIFY EVERYTHING BY BABEHOURS
  
  //DREAMS
if(0<babehours<3.99){cambioEstado=1;
 colorR=0;colorG=200;colorB=255
 backcolorR=0;backcolorG=0;backcolorB=230}
  
  //LIGTHS ON  
if(4<babehours<4.99){cambioEstado=3;
 colorR=168;colorG=255;colorB=85
 backcolorR=250;backcolorG=200;backcolorB=100}
  
  //SHOWER AND MAKE-UP
if(5<babehours<6.99){cambioEstado=4;
 colorR=255;colorG=255;colorB=85
 backcolorR=0;backcolorG=200;backcolorB=255}
  
  //BUS AND UNIANDES
if(7<babehours<7.99){cambioEstado=1;
 colorR=255;colorG=255;colorB=0
 backcolorR=0;backcolorG=255;backcolorB=0}
  
  //CLASSES
if(8<babehours<11.99)
{cambioEstado=3;
 colorR=10;colorG=255;colorB=250
 backcolorR=200;backcolorG=255;backcolorB=0}
  
  //LUNCH
if(12<babehours<12.99)
{cambioEstado=1;
  colorR=255;colorG=125;colorB=202
 backcolorR=200;backcolorG=255;backcolorB=0
}
  //CLASSES/UNIANDES
if(13<babehours<17.99)
{cambioEstado=3;
 colorR=10;colorG=255;colorB=250
 backcolorR=200;backcolorG=255;backcolorB=0}
  
  //TALK WITH BF ED
if(18<babehours<18.99)
{cambioEstado=6;
 colorR=255;colorG=125;colorB=202
 backcolorR=200;backcolorG=255;backcolorB=0}
  
  //DINER
if(19<babehours<19.99)
{cambioEstado=2;
 colorR=255;colorG=125;colorB=202
 backcolorR=255;backcolorG=146;backcolorB=227}
  
  //DESK WORKS
if(20<babehours<21.99)
{cambioEstado=6;
 colorR=168;colorG=255;colorB=85
 backcolorR=200;backcolorG=255;backcolorB=0}
  
  //SLEEP
if(22<babehours<23)
{cambioEstado=1;
 colorR=0;colorG=200;colorB=255
 backcolorR=0;backcolorG=0;backcolorB=230}

}
  
 //TEXT
    strokeWeight(0);
  textSize(30);
  textStyle(BOLD);
text('MY DAILY BEATING HEART', 210, 100); 
  stroke(0)
  textSize(10);
  stroke(0)
  text('HACER CLIC CON EL MAUSE PARA SENTIR MIS LATIDOS A ESTA HORA', 230, 200);
  
}   //THIS CLOSE DRAW FUNCTION