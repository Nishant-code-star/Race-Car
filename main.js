Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

Orange_width = 100;
Orange_height = 90;
Orange_x = 10;
Orange_y = 10;

background_image = "Screenshot 2021-06-18 100621.png.jpg";
Orange_image = "Orange.png";

Track_array=["Track 1.png", "Track 2.png", "Track 3.png", "Track 4.png"];

random_number=Math.floor(Math.random()*4);
background_image=Track_array[random_number];

function add() {
    background_img1 = new Image();
    background_img1.onload = uploadBackground;
    background_img1.src = background_image;

    Yellow_img1 = new Image();
    Yellow_img1.onload = uploadRover;
    Yellow_img1.src = Yellow_image;
}

function uploadBackground() {
    ctx.drawImage(background_img1, 0, 0, Canvas.width, Canvas.height);
}

function uploadRover() {
    ctx.drawImage(Orange_img1, Orange_x, Orange_y, Orange_width, Orange_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '37') {
        Left();
        console.log("left");
    }
    if (keypressed == '38') {
        Up();
        console.log("up");
    }
    if (keypressed == '39') {
        Right();
        console.log("right");
    }
    if (keypressed == '40') {
        Down();
        console.log("down");
    }
}

function Up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function Down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}
function Right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}
function Left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}

