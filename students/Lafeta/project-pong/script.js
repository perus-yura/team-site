// Налаштування ігрового поля
const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Параметри ракеток
const paddleWidth = 10;
const paddleHeight = 100;
const paddleOffset = 10;

// Початкова позиція лівої ракетки по вертикалі
let leftPaddleY = height / 2 - paddleHeight / 2;

// Функція очищення поля та малювання ракеток
function draw(playerY) {
    // Очищення екрану перед кожним новим кадром
    context.clearRect(0, 0, width, height);

    // Малювання лівої ракетки (гравець)
    context.fillStyle = "#3F826D";
    context.fillRect(paddleOffset, playerY, paddleWidth, paddleHeight);

    // Малювання правої ракетки (супротивник)
    context.fillStyle = "#3F826D";
    context.fillRect(
        width - paddleWidth - paddleOffset,
        height / 2 - paddleHeight / 2,
        paddleWidth,
        paddleHeight
    );
}

// Параметри та малювання м'яча
const ballSize = 12;

context.beginPath();
context.arc(width / 2, height / 2, ballSize, 0, 2 * Math.PI);
context.fillStyle = "#3F826D";
context.fill();
