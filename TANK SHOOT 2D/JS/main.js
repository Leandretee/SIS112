// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

canvas.width = utilsObj.RoundTablero(canvas.width);
canvas.height = utilsObj.RoundTablero(canvas.height);

console.log('width', canvas.width)
console.log('height', canvas.height)
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);
// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(600, 300, 'up', 3, game.ancho, game.alto);

const enemyTank1 = new EnemyTank(100, 100, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(700, 200, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(500, 400, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(600, 100, 'down', 3, game.ancho, game.alto);

// Dibujamos los elementos en el canvas




// Controles basicos para mmover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch(e.key) {
        // Las teclas de las FLECHAS del teclado
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break;
        /*
        // Las teclas de las LETRAS del teclado
        case 'a':
            playerTank.moveLeft();
            break;
        case 'd':
            playerTank.moveRight();
            break;
        case 'w':
            playerTank.moveUp();
            break;
        case 's':
            playerTank.moveDown();
            break;
            */
    }
});

// Añadir movimiento aleatorio al enemigo
function moveEnemyTankRandomly(enemyTank) {
    const directions = ['left', 'right', 'up', 'down']; // Posibles direcciones
    const randomDirection = directions[Math.floor(Math.random()* directions.length)];

    // Movemos el tanque enemigo en la direccion elegida
    switch(randomDirection) {
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;  
    }
}

// Hacemos que el tanque enemigo ze mueva aleatoriamente cada 500 s
setInterval(()=>{
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
}, 300);

setInterval(()=>{
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);
}, 200);

const escenario = [ 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], 
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1], 
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], 
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1], 
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1], 
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1], 
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
];

function drawEscenario(ctx, escenario) {
     for (let row = 0; row < escenario.length; row++) { 
        for (let col = 0; col < escenario[row].length; col++) { 
            const cell = escenario[row][col]; 
            const x = col * game.anchoCelda; 
            const y = row * game.altoCelda;
            
            switch(cell) { 
                case 0: // Espacio vacío 
                ctx.fillStyle = "black";
                ctx.fillRect(x, y, game.anchoCelda, game.altoCelda); 
                break; 
                case 1: // Pared 
                ctx.fillStyle = "gray"; 
                ctx.fillRect(x, y, game.anchoCelda, game.altoCelda); 
                // var wall = new Image(); 
                // wall.src = "./ASSETS/pared.webp"; 
                // ctx.drawImage(wall, x, y, cellSize, cellSize); 
                break; 
            default:
                break;
            }
         } 
        } 
    }

// Lógica del juego (actualización de la pantalla)
function updateGame() {
// Limpiamos el canvas en cada frame
ctx.clearRect(0, 0, canvas.width, canvas.height);

drawEscenario(ctx, escenario); // Dibujamos el escenario

// Dibujamos el tanque del jugador
playerTank.drawTank(ctx);
// Dibujamos el tanque enemigo
enemyTank1.drawEnemyTank(ctx);
enemyTank2.drawEnemyTank(ctx);
enemyTank3.drawEnemyTank(ctx);
enemyTank4.drawEnemyTank(ctx);

// Refrescar los graficos
requestAnimationFrame(updateGame);
}

// Iniciar el juego
updateGame();