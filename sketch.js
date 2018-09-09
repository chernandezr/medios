function setup() {

  createCanvas(540,300);
}

function draw() {
  background(255);
	   //var de triangulo 1 y triangulo 2
var xan1= 60;   var xan4=120
var yan1= 0;    var yan4=0
var xan2= 90;   var xan5=150
var yan2= 30;   var yan5=0
var xan3= 60;   var xan6=150
var yan3= 30;   var yan6=30
    //up remplazan a 3 y do remplazan a 5
var xanup= 90;  var xando= 120
var yanup= 0;   var yando=30

	  //making triangles (initial pattern)
	stroke(0)
	fill(0)
var x=30
// firts part (letf-up)
var dif=0
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=30
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=60
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=90
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)

//second part (left-down)
var dif=120
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=150
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=180
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=210
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
  
//part 3 (rigth-up)
  
	   //var de triangulo 1 y triangulo 2
var xan1= 60+120;   var xan4=120+120
var yan1= 0;        var yan4=0
var xan2= 90+120;   var xan5=150+120
var yan2= 30;       var yan5=0
var xan3= 60+120;   var xan6=150+120
var yan3= 30;       var yan6=30
    //up remplazan a 3 y do remplazan a 5
var xanup= 90+120;  var xando= 120+120
var yanup= 0;       var yando=30

	  //making triangles (initial pattern)
	stroke(0)
	fill(0)  

var dif=0
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=30
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=60
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=90
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)

//second part (left-down)
var dif=120
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=150
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=180
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=210
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
  
	   //var de triangulo 1 y triangulo 2
var xan1= 60+120*2;   var xan4=120+120*2
var yan1= 0;          var yan4=0
var xan2= 90+120*2;   var xan5=150+120*2
var yan2= 30;         var yan5=0
var xan3= 60+120*2;   var xan6=150+120*2
var yan3= 30;         var yan6=30
    //up remplazan a 3 y do remplazan a 5
var xanup= 90+120*2;  var xando= 120+120*2
var yanup= 0;         var yando=30

	  //making triangles (initial pattern)
	stroke(255,206,0)
	fill(255,206,0)
  
var dif=0
var dif=0
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=30
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=60
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=90
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)

//second part (left-down)
var dif=120
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=150
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=180
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=210
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
  
//

	   //var de triangulo 1 y triangulo 2
var xan1= 60+120*3;   var xan4=120+120*3
var yan1= 0;          var yan4=0
var xan2= 90+120*3;   var xan5=150+120*3
var yan2= 30;         var yan5=0
var xan3= 60+120*3;   var xan6=150+120*3
var yan3= 30;         var yan6=30
    //up remplazan a 3 y do remplazan a 5
var xanup= 90+120*3;  var xando= 120+120*3
var yanup= 0;         var yando=30
  
var dif=0
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=30
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=60
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=90
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)

//second part (left-down)
var dif=120
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
var dif=150
triangle(xan1,yan1+dif,xan2,yan2+dif,xanup,yanup+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xando,yando+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=180
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xan3+x,yan3+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xan5+x,yan5+dif,xan6+x,yan6+dif)
var dif=210
triangle(xan1,yan1+dif,xan2,yan2+dif,xan3,yan3+dif)
triangle(xan1+x,yan1+dif,xan2+x,yan2+dif,xanup+x,yanup+dif)
triangle(xan4,yan4+dif,xan5,yan5+dif,xan6,yan6+dif)
triangle(xan4+x,yan4+dif,xando+x,yando+dif,xan6+x,yan6+dif)
  

}