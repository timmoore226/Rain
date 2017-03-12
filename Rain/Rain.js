// Purple Rain
// (138, 43, 226)
// (230,230,250)

var drops = [];

function setup() {
  createCanvas(screen.width, screen.height);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
