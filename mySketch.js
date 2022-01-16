//author: anjalishivani
//Team Newbies
//N-body simulation
var s=[];
var s1;
var s2;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   s1= new stars(10,20);
  s2= new stars(10,-10);
  for(var i =0;i<60;i++){
    s[i]= new stars(random(-100,100), random(-100,100));
  }
}

function draw() {
  background(0);
for(var i=0; i<60;i++){
      s[i].update();
      s[i].display();
}
  fill(255);
    s1.display();
  s2.display();
      s1.update();
rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  fill(218,112,214,25);
  box(width/3);
  
}
function stars(x,y){
  
  this.x= x;
  this.y = y;
  this.r = 4;


this.display = function(){
stroke(255);
  fill(255,100);
  ellipse(this.x, this.y, this.r*2, this.r*2);
}
  this.update = function()
{
  this.x =this.x +random(-2,2);
  this.y= this.y+random(-2, 2);
}
}