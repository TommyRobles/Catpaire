let a=0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(53, 89, 37);
  fill(255);
  
  stroke(18, 13, 3);
  
  // the siling 
  fill(74, 71, 67);
  rect(0,5,400,90);
  
    //this are the right wings
  line(200,170, 290, 142);
  line(200, 165, 290, 140);
  line(200, 160, 290, 138);
  line(200, 155, 290, 136);
  line(200, 150, 290, 134);
  line(200, 145, 290, 132);
  line(200, 140, 290, 130);
  line(200, 135, 290, 128);
  
  
  //left wings
 line(125, 140, 210, 180);
 line(125, 135, 210, 178);
 line(125, 130, 210, 176);
 line(125, 125, 210, 174);
 line(125, 120, 210, 172);
 line(125, 115, 210, 170);
 line(125, 110, 210, 168);
 line(125, 105, 210, 166);
  
  

  // top circle 
  fill(179, 142, 77);
  ellipse(200, 150, 50, 55);
  ellipse(225, 150, 20, 20);
  ellipse(175, 150, 20, 20);
  rect(205, 105, 10, 23);
  rect(185, 105, 10, 23);
  
  
  //Circle inside the circle
  fill(217, 212, 199);
  ellipse(200, 148, 23, 30);
 
  
  // right fingers 
  ellipse(205, 100, 6, 10);
  ellipse(210, 100, 6, 10);
  ellipse(215, 100, 6, 10);
  //left fingers
  ellipse(195, 100, 6, 10);
  ellipse(190, 100, 6, 10);
  ellipse(185, 100, 6, 10);
  
  
  
  //battom circle
  fill(179, 142, 77);
  ellipse(200, 190, 60, 50);
 
  
  //eyes
  fill(55, 173, 28);
  ellipse(190, 195, 15, 15);
  ellipse(208, 195, 15, 15);
 
 
  // the eyes inside the eyes
  fill(28, 26, 26);
  push();
  translate(190,195);
  rotate(radians(a));
  ellipse(0, 0, 4, 9);
  a = a +1;
  pop();
  
  ellipse(207,195, 4, 9);
  
  
  
  
  
  
  // the ears 
  fill(163, 111, 20);
  ellipse(225, 215, 20, 15);
  ellipse(180, 217, 20, 15);
  
  //mouth
  fill(38, 29, 11);
  ellipse(200, 175, 20, 8);
  
  
  
  //moustache
  //right
  line(220, 185, 240, 187);
  line(220, 180, 240, 184);
  line(220, 175, 240, 182);
  //left
  line(156, 186, 180, 183);
  line(156, 180, 180, 180);
  line(156, 176, 180, 177);
  
  
  
  
  
  
  
  

  
  
}