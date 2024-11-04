class Nave{
    posX;
    posY;
    direccionDisparo;
    Vidas;
    velocidad;
    anchoMapa;
    altoMapa;

    constructor(_posX, _posY, _direccionDisparo, _vidas, _anchoMapa, _altoMapa) {
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 50;
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }

    moveLeft() {
       if (this.posX - this.velocidad >= 0) {
            this.posX -= this.velocidad;
       }
    }

    moveRight() {
        if (this.posX + this.velocidad <= this.anchoMapa - 50){
        this.posX = this.posX + this.velocidad;
    }
    }

    drawNave(ctx) {
        ctx.fillStyle = 'green';
        // Representamos el tanque como un cuadrado
        ctx.fillRect(this.posX, this.posY, 50, 50);
        }
}