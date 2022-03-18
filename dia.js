class Dia {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
    
  }
  
  display() {
    fill(frameCount, 242, 111, 107);
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    rectMode(CENTER);
    noStroke();
    beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
    endShape();
    pop();
  }
  
  move(){
    
    // this.angle is shorthand for this.angle = this.angle + 1
    this.rotation++;
    
    if (this.yPos <= height * 1.025){
    // this.yPos = this.yPos + 2
    // shorthand below is +=
    this.yPos += 2;
    } else if (this.yPos > height) {
      this.yPos = height * .025;
    }
  }
  
  
}


// Draw a square at location (30, 20) with a side size of 55.
  // fill(209, 162, 237);
  // square(20, 10, 33);