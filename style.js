song= "";
var Chop_Suey= mp1.mp2.mp3;
var Time = mp3.mp3;
function preload()
{
    song= loadSound("mp1.mp2.mp3");
    song= loadSound("mp3.mp3");
}
function play()
{
    song.play();
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 0, 0, 600, 500);
}