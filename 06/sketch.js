//ESTO MODIFICA LAS POSICIONES DEL MOUSE
var mx = 0;
var my = 0;
// POTENCIALIZADOR
var power = 0.09;
//Como ahora esta en modo RADIUS:
var radius = 20;
var smallradius = radius - 5
var edge = 125+150;
var inner = edge + radius;
//con lejania controlo cuanto deja de perseguirme la ellipse
var lejania = 10

//cargar previamente las imagenes y musica
function preload(){
  fondopiscina= loadImage ('imagenes/fondopiscina.jpg');
  tiburoncin = loadImage ('imagenes/tiburoncin.png')
  funky = loadSound ('musica/Funky Groove musica.mp');
}

function setup() {
  createCanvas(1100, 800);
  noStroke(); 
   funky.loop()
  
//el modo ellipse y modo rect hacen el comando 
//para ubicar las ellipses y el rect ya no sea el centro  
  ellipseMode(RADIUS);
  rectMode(CORNERS);

}

function draw() {
  background(255);

  image(fondopiscina,2,4)
  
// si el mouse esta en x posición - un numero y esta es menor a la lejania
// entonces 
// sin el valor absoluto el proceso no se puede regresar.
// ya que el mouse puede estar alejado -10
  
  if (abs(mouseX - mx) > lejania) {
    mx = mx + (mouseX - mx) * power;
  }
  if (abs(mouseY - my) > lejania) {
    my = my + (mouseY- my) * power;
  }
//constrain obliga algo a quedarse entre un rango de valores 
//y no moverse de ahi  
  
  mx = constrain(mx, inner, width - inner);
  my = constrain(my, inner+100, height+190 - inner);
  fill(237,34,203,5);
  rect(edge, edge, width-edge, height+190-edge);
  fill(255);
  //ellipse(mx, my, radius, radius);
  image(tiburoncin,mx, my,50,50);
  
//el volumen aumentara cuando la bolita suba (mouse)
// el volumen disminuye cuando la bolita (mouse) baja
   var volumen = map(mouseY, height, 0, 0, 1);
  funky.setVolume(volumen+0.1);
  
//el rate va  el doble cuando se acerca a la derecha
//el rate va en reversa al ir a la izquerda
// al mismo tiempo el lado por donde se escuchara la musica (pan)
var panside = map(mouseX, 0, width, -1, 1);
  funky.pan(panside);
  
var rapidez = map(mouseX, 0, width, -2, 2);
  funky.rate(rapidez);
  if(-1< rapidez <1.0){rate=1.2}
  
  ellipse(mouseX,mouseY,smallradius,smallradius)
}

