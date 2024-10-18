class EnemyTank{
    posX;
    posY;
    direccionDisparo;
    Vidas;

    constructor(_posX, _PosY, _direccionDisparo, _Vidas){
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _Vidas;
    }

    moveLeft() {

    }

    moveRight() {

    }

    moveUp() {

    }

    moveDown() {

    }

    rotarTank(_direccionDisparo){
        this.direccionDisparo = _direccionDisparo;
    }

}