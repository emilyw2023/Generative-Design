let circleNumSlider
let circleGapSlider
let fromColorPicker
let toColorPicker

function setup() {
  createCanvas(400, 400);
  strokeWeight(30)
  strokeCap(PROJECT)
  
  // circles
  createP('Circles')
  createElement('label', 'num')
  circleNumSlider = createSlider(1, 10, 5) // Set default to 5 so you see circles instantly
  
  createElement('label', 'gap')
  circleGapSlider = createSlider(10, 50, 30) // Adjusted min/max/default so circles fit nicely on a 400x400 canvas
  
  fromColorPicker = createColorPicker("#ff00ff")
  toColorPicker = createColorPicker("#0000ff")
  
  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('myCanvas', 'jpg');
  })
}

// 1. Added the standard p5.js draw loop
function draw() {
  background(255); // Clears the canvas frame-by-frame so changes don't stack up
  
  push();
  translate(width / 2, height / 2); // 2. Moves (0,0) to the center of your 400x400 canvas
  drawCircles(); // 3. Calls your custom function
  pop();
}

function drawCircles() {
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value()
  let from = color(fromColorPicker.value())
  let to = color(toColorPicker.value())
  
  for(let i=0; i < num; i++) {
    push()
    noFill()
    strokeWeight(10)
    stroke(lerpColor(from, to, i/num))
    circle(0, 0, (i+1) * gap) 
    pop()
  }
}
