  let micVar;
  let mic;
  let value = 50;
  let dia1;
  let dia2;
  let dia3;
  let dia4;
  let dia5;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();
  frameRate(30);
  
  for (let i = 0; i <= 7; i++){
  dia1 = new Dia(width * 0.05, height * 0.025, 33, .5);
  dia2 = new Dia(width * 0.75, height * 0.075, 33, 1.5);
  dia3 = new Dia(width * 0.25, height * 0.69, 33, 0);
  dia4 = new Dia(width * 0.10, height * 0.85, 33, 2.5); 
  dia5 = new Dia(width * 0.50, height * 0.25, 33, 2.5);
  }
  
}

function draw() {
  background(220);
  // three-digit hexadecimal RGB notation
background('#fae');
describe('canvas with pink background');
  micLevel = mic.getLevel();
  
  micVar = map(mic.getLevel(), 0, 1, 0, 25);
  console.log(micVar)
  
  // Draw a square at location (30, 20) with a side size of 55.
  // fill(209, 162, 237);
  // square(20, 10, 33);
  
  dia1.display();
  dia2.display();
  dia3.display();
  dia4.display();
  dia5.display();
  
  dia1.move();
  dia2.move();
  dia3.move();
  dia4.move();
  dia5.move();
  
  drawWater();
  
  drawLilyPad();
  
  drawFrogHead();
  
  drawOuterEyes();
  
  drawHindLegs();
  
  drawBackFeet();
  
  drawBackToes();
  
  drawMainLegs();
  
  drawHindFeet();
  
  drawFrogToes();
  
  drawSmile();
  
  drawBlush();
  
  drawPupils();
  
  fill(value);
  rect(width * .2375,height * .1375,width * .075,height * .025);
  rect(width * .6875,height * .1375,width * .075,height * .025);
  
}
function mousePressed() {
  
  // click here
  
  if (value === 50) {
    value = 255;
  } else {
    value = 50;
  }
}

function drawWater(){
  push();
  noStroke();
  fill(173, 225, 239);
  rect(width * 0, height * .7, width * .999, height * .8);
  pop();
}

function drawLilyPad(){
  push();
  noStroke();
  fill(204, 249, 173);
  ellipse(width * .5, height * .8,width * .85, height * .375);
  pop();
}

function drawFrogHead(){
  fill(162, 237, 176);
  // draw frog body
  ellipse(width * .5,height * .625,width * .7,width * .475);
  
  // draw frog face
  ellipse(width * .5,height * .35,width * .75,width * .375);
}

function drawOuterEyes(){
      // draw first eye
  fill(235);
  strokeWeight(2);
  circle(width * .275,height * .15,width * .15);
  // draw second eye
  circle(width * .725,height * .15,width * .15);
}

function drawPupils(){
  // draw pupils
  fill(50);
  rect(width * .2375,height * .1375,width * .075,height * .025);
  rect(width * .6875,height * .1375,width * .075,height * .025);
}

function drawHindLegs(){
  // draw hind legs
  fill(162, 237, 176);
  ellipse(width * .175,height * .725,width * .175,height * .325)
  
  ellipse(width * .875,height * .725,width * .175,height * .325)
}

function drawBackFeet(){
  triangle(width * .055,height * .9100,width * .15,height * .790,width * .22,height * .9100);
  triangle(width * .965,height * .9100, width * .87,height * .790,width * .78, height * .9100);
}

function drawBackToes(){
  circle(width * .08, height * .91, width * .06);
  circle(width * .14, height * .91, width * .06);
  circle(width * .2, height * .91, width * .06);
  circle(width * .82, height * .91, width * .06);
  circle(width * .88, height * .91, width * .06);
  circle(width * .94, height * .91, width * .06);
}

function drawMainLegs(){
  // draw front legs
  ellipse(width * .25,height * .775,width * .125,height * .325);
  
  ellipse(width * .75,height * .775,width * .125,height * .325);
}

function drawHindFeet(){
   // draw frog hind feet
  triangle(width * .3,height * .9375,width * .25,height * .825,width * .2,height * .9375);
  
  triangle(width * .8,height * .9375,width * .75,height * .825,width * .7,height * .9375);
}

function drawFrogToes(){
    // draw frog toes
  circle(width * .2125, height * .925, width * .0375);
  
  circle(width * .25, height * .925, width * .0375);
  
  circle(width * .2875, height * .925, width * .0375);
  
  circle(width * .7125, height * .925, width * .0375);
  
  circle(width * .75, height * .925, width * .0375);
  
  circle(width * .7875, height * .925, width * .0375);
}

function drawSmile(){
    // draw smile
  push();
  fill(237, 162, 204);
  rotate(micVar);
  triangle(width * .45, height * .25, width * .5, height * .3, width * .55, height * .25);
  pop();
}

function drawBlush(){
    // draw blush
  fill(frameCount, 173, 199);
  ellipse(width * .1875, height * .325, width * .1375, height * .1375)
  ellipse(width * .8125, height * .325, width * .1375, height * .1375)
}