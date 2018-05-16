// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/JXuxYMGe4KI





var blob;

var blobs = [];
var zoom = 1;

function windowResized(){

resizeCanvas (windowWidth, windowHeight);

}



function setup() {
  background(0);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 400; i++) {
    var x = random(-width,width);
    var y = random(-height,height);
    blobs[i] = new Blob(x, y, 16);
  }
}

function draw() {


  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length-1; i >=0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    


    }
  }

  blob.show();
  blob.update();

}




