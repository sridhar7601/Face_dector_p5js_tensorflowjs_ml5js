// Save/Load Model
// A Beginner's Guide to Machine Learning with ml5.js
// The Coding Train / Daniel Shiffman
// https://youtu.be/eeO-rWYFuG0
// https://thecodingtrain.com/learning/ml5/4.1-ml5-save-load-model.html
// https://editor.p5js.org/codingtrain/sketches/1g9C6OKX

let mobilenet;
let classifier;
let video;
let label = 'loading model';
let happyButton;
let sadButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');
  classifier.load('/Modals/model (4).json', customModelReady);
}

 function customModelReady() {
   console.log('Custom Model is ready!!!');
   label = 'model ready';
   classifier.classify(gotResults);
 }

function videoReady() {
  console.log('Video is ready!!!');
}

function setup() {
  createCanvas(320, 270);
  //canvas.position(0,0);

  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}

/*function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}*/

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    //updated to work with newer version of ml5
     label = result;
    label = result[0].label;
    classifier.classify(gotResults);
  }
}
