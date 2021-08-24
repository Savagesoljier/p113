function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(350,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,155,90,330,300);
    fill("Red");
    circle(50,50,80);
    fill("Blue");
    circle(50,430,80);
    fill("Green");
    circle(590,50,80);
    fill("Black");
    circle(590,430,80);
    fill("Black");
    rect(90,40,460,20);
    fill("Green");
    rect(90,420,460,20);
    fill("Blue");
    rect(40,90,20,300);
    fill("Red");
    rect(580,90,20,300);

}
function take_snapshot(){
    save("png.png");
}


