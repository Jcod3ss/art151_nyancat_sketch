//Zack Rashid, melanie Baltazar
//ADD names of group members at top of sketch 
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
//let nyanBg; delete
//let variable; delete
let circles = [];


let colors = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  [255, 20, 180], // hot pink // added another number
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() {
  createCanvas(400, 400);
 nyan = await loadSound('media/nyanCat.mp3');
  noNyan = await loadImage('media/nyancatless.gif');// added;
  //sprinkles = await loadImage('sprinkles.jpg'); delete
 background(noNyan);
}

function draw() {
 image(noNyan, 0, 0, width, height);// image to function draw
  // Draw all circles
  for (let circle of circles) { //mispelled
    fill(circle.color); //changed to color
    ellipse(circle.x, circle.y, 50, 50); //ellipse was mispelled
  }
  

  if (mouseIsPressed) {
    let c = random(colors); 
    let newCircle = { //there was an extra space
      x: mouseX, // lower case m
      y: mouseY,
      color: color(c[0], c[1], c[2]) //changed to color and chnaged to brackets
    };
    circles.push(newCircle);
  }
}

function mousePressed(){
 // let c = random(colors);
  //let newCircle = {
   // x: mouseX,
    //y: mouseY,
   // color: color(c[0], c[1], c[2])
 // };
 // circles.push(newCircle);//delete
  nyan.setVolume(0.5); //mispledd
  nyan.rate(playbackRate); //mispelled
   nyan.loop();
}
function mouseReleased(){
 if(nyan){//needs and if
  nyan.stop();
}
}//bracket was missing

function keyPressed() {
  if (keyCode === UP_ARROW) { // add = remove ; 
    playbackRate += 0.1; // b was capitalized
    nyan.rate(playbackRate); 
  } else if (keyCode === DOWN_ARROW) { 
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) { 
    playbackRate =  1.0; 
    nyan.rate(playbackRate); // b was capitalized
  }
}
//deleted 3 extra brackets