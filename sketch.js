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
  circleNumSlider = createSlider(1,10, 1) // min, max, default, step
  createElement('label', 'gap')
  circleGapSlider = createSlider(50,150, 10)
  fromColorPicker = createColorPicker("#ff00ff")
  toColorPicker = createColorPicker("#0000ff")

   let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('myCanvas', 'jpg');
  })
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
    // stroke(255,0,255,opacity)
    stroke(lerpColor(from, to, i/num))
    circle(0,0, (i+1) * gap)
    pop()
  }
}

