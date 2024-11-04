// Obtener el canvas y el botón de inicio
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
canvas.width = 800;
canvas.height = 600;

// Variables del juego
let gameRunning = false;
let player, invaders = [];

// Ocultar el botón y empezar el juego
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    startGame();
});

// Función para iniciar el juego
function startGame() {
    gameRunning = true;
    player = new Player(canvas.width / 2, canvas.height - 30);
    createInvaders();
    gameLoop();
}

// Definir el jugador
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 20;
        this.speed = 5;
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    moveLeft() {
        this.x = Math.max(this.x - this.speed, 0);
    }
    moveRight() {
        this.x = Math.min(this.x + this.speed, canvas.width - this.width);
    }
}

// Crear los invasores
function createInvaders() {
    const rows = 5;
    const cols = 8;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            invaders.push({
                x: col * 60 + 30,
                y: row * 40 + 30,
                width: 40,
                height: 20,
                color: 'red',
                alive: true
            });
        }
    }
}

// Dibujar los invasores
function drawInvaders() {
    invaders.forEach(invader => {
        if (invader.alive) {
            ctx.fillStyle = invader.color;
            ctx.fillRect(invader.x, invader.y, invader.width, invader.height);
        }
    });
}

// Mover el jugador con las teclas de flecha
window.addEventListener('keydown', (e) => {
    if (gameRunning) {
        if (e.key === 'ArrowLeft') player.moveLeft();
        if (e.key === 'ArrowRight') player.moveRight();
    }
});

// Bucle principal del juego
function gameLoop() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    drawInvaders();

    requestAnimationFrame(gameLoop);
}

// Detener el juego
function stopGame() {
    gameRunning = false;
    startButton.style.display = 'block';
}