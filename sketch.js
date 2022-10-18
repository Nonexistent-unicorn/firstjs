let w=400;
let h=400;
let rectWidth = 0
function setup() {
  createCanvas(w,h);
  rectMode(CENTER);
  
}

function draw() {
  background(125);
  fill(100, 20, 10)
  stroke(225)
  strokeWeight(5)

  rectWidth++;
  if (rectWidth > 100) {
    rectWidth = 0;
  }
  rect(w/2, h/2, rectWidth, 57);
  

}
