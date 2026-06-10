const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;
const paddleOffset = 10;

let leftPaddleY = height / 2 - paddleHeight / 2;
let ball = {
    x: width / 2,
    y: height / 2,
    velocity:{
        x:-100.0,
        y: 0,
    },
};

function draw(playerY, ball) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "rgb(230, 235, 231)"
    context.fillRect(
        // width / 2 - paddleWidth / 2,
        paddleOffset,
        playerY,
        paddleWidth,
        paddleHeight,
    )
    context.fillStyle = "rgb(230, 235, 231)"
    context.fillRect(
        // width / 2 - paddleWidth / 2,
        width - paddleWidth - paddleOffset,
        height / 2 - paddleHeight / 2,
        paddleWidth,
        paddleHeight);

    const ballSize = 12;

    context.beginPath();
    context.arc(ball.x,ball.y, ballSize, 0, 2 * Math.PI);
    context.fill();
}

canvas.addEventListener("mousemove", (event) => {
    leftPaddleY = event.offsetY;
});

draw(leftPaddleY, ball);

setInterval(() => {
    ball.x = ball.x + ball.velocity.x;
    ball.y = ball.y + ball.velocity.y;

    if ( ball.x < 0 || ball.x > width){
       ball.velocity.x = ball.velocity.x * -1.0
    }

    draw(leftPaddleY, ball); }, 17);

