$(document).ready(function() { //utilizando jquery
'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
    /* Dibuja un círculo
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';
    */
    /* Dibuja 64 círculos
      var c;
      for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
          c = Shape.Circle(x, y, 20);
          c.fillColor = 'green';
        }
      }
    */
    var tool = new Tool(); //función de paper

    var c = Shape.Circle(200, 200, 100);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'HOLA A TODOS\nClick on Canvas';

    tool.onMouseDown = function(event) {
      var c1 = Shape.Circle(event.point.x, event.point.y, 20);
      var c2 = Shape.Circle(event.point, 40);
      c1.fillColor = 'black';
      c2.fillColor = "rgba(255,0,0,0.5)";
    };
  paper.view.draw();
    //console.log('main.js loaded');
});
