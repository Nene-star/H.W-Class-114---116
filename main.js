moustacheX = 0;
moustacheY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/J4XcHhsm/image.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
    image(moustache, moustacheX, moustacheY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.moustache.x;
        noseY = results[0].pose.moustache.y;
        console.log("moustache x = " + moustacheX);
        console.log("moustache y = " + moustacheY);
    }
}