
// define the list
var colorList = ['#8C1C6C',
                 '#FF66D2',
                 '#3D9941',
                 '#AAF2AD'
                ];

var d = 30;
var g = 0;



function setup() {
  
   createCanvas(800, 600);
   frameRate(1);
    
}

function draw() {
   background (g);
    for (var a = 10; a < 800; a += 30) {
        for (var b = 15; b < 600; b += 30) {
            
            var index = floor(random() * colorList.length);
            var colorHex = colorList[index];
            fill(color(colorHex));
            noStroke();
        
            ellipse (a, b, d,d);

            
        }
    }
}
function mouseWheel(event){
    if(event.delta <0 && d <= 60){
     g -= 50;
     d += 3;  
    }
    else if (event.delta >0 && d >= 6){
     g += 50;
     d -= 3;  
    }
    
}

function mousePressed(){
    d = 0; 
}
function mouseReleased(){
    d = 30;
}
