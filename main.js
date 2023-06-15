LWX=0;
RWX=0;

D=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized...");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        LWX=results[0].pose.leftWrist.x;
        RWX=results[0].pose.rightWrist.x;
        console.log("LWX="+LWX+", RWX = "+RWX);
        D=floor(LWX-RWX);
    }
}

function draw() {
    background("#00FF00");
    textSize(D);
    fill("black");
    text('Aditya',40,200);
}
