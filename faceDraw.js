var ctracker;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  
  videoInput.hide();
  
  var cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.position(0, 0);

  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  noStroke();
  background(0);
}


function draw() {
  // array for facial points
  var positions = ctracker.getCurrentPosition();

  if(positions.length > 0){
    //coordinates for nose
    var noseX = positions[37][0];
    var noseY = positions[37][1];

    //'pen' for nose
    fill(r, g, b);
    stroke(r, g, b);
    ellipse(400-noseX, noseY, 5, 5);

    //top and bottom of the mouth coordinates
    var upMouthX = positions[60][0];
    var upMouthY = positions[60][1];
    var downMouthX = positions[57][0];
    var downMouthY = positions[57][1];

    //top of eye and bottom of eyebrow coordinates
    var eyeX = positions[30][0];
    var eyeY = positions[30][1];
    var browX = positions[18][0];
    var browY = positions[18][1];

    //distance of space between mouth and space between eyes and eyebrows
    var mouthDistance = getDistance(upMouthX, upMouthY, downMouthX, downMouthY);
    var browDistance = getDistance(eyeX, eyeY, browX, browY);

    //intervals for mouth distance (range: ~2-30px)
    if(mouthDistance > 0 && mouthDistance < 6){
      r = 220; //red
      g = 20;
      b = 60;
    }else if(mouthDistance > 6 && mouthDistance < 12){  
      r = 255;  //orange
      g = 127;  
      b = 0;
    }else if(mouthDistance > 12 && mouthDistance < 18){
      r = 0;   //green
      g = 200;
    }else if(mouthDistance > 18 && mouthDistance < 24){
      r = 0;  //blue
      g = 0;
      b = 128
    }else{
      r = 191; //purple
      g = 62;
      b = 255;
    }

    //eyebrow raising (range: ~16-22px if about 1.5 feet away)
    if(browDistance > 25){
      r = 0;
      g = 0;
      b = 0;
      ellipse(400-noseX, noseY, 10, 10);
    }
  }
}

//distance formula
function getDistance(x1, y1, x2, y2){
  var distance = sqrt( Math.pow( (y2 - y1) , 2) + Math.pow( (x2 - x1) , 2) );
  return distance;
}
