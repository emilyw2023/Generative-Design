let circleNumSlider;
let circleGapSlider;
let fromColorPicker;
let toColorPicker;

function setup() {
  createCanvas(600, 600); 
  strokeCap(PROJECT);
  createP('Controls');
  
  createElement('label', 'Circles Quantity: ');
  circleNumSlider = createSlider(5, 40, 25); 
  
  createElement('label', ' | Gap Spacing: ');
  circleGapSlider = createSlider(5, 30, 15);
  
  createElement('label', ' | Colors: ');
  fromColorPicker = createColorPicker("#C49A9A"); 
  toColorPicker = createColorPicker("#0000FF");   
  
  let jpgButton = createButton('Export JPG');
  jpgButton.mousePressed(function() {
    saveCanvas('moirePattern', 'jpg');
  });
}

function draw() {
  background(240); 
  push();
  translate(width / 2, height / 2); 
  let numClusters = 6;              
  let clusterRadius = 180;         
  for (let i = 0; i < numClusters; i++) {
    let angle = TWO_PI / numClusters * i;
    let cx = cos(angle) * clusterRadius;
    let cy = sin(angle) * clusterRadius;
   
    push();
    translate(cx, cy);
    drawConcentricCircles();
    pop();
  }
  
  pop();
}

function drawConcentricCircles() {
  let num = circleNumSlider.value();
  let gap = circleGapSlider.value();
  let from = color(fromColorPicker.value());
  let to = color(toColorPicker.value());
  
  noFill();
  strokeWeight(6); 
  
  for (let i = 0; i < num; i++) {
    let amt = i / (num - 1);
    stroke(lerpColor(from, to, amt));
    circle(0, 0, (i + 1) * gap * 2);
  }
}
