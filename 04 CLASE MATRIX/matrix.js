class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

/*
    // Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                var numeroRandom = Math.random();
                this.matriz[i][j] = Math.floor(numeroRandom * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }


    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    //AQUI VAN EJERCICIOS

        //Primera fila con 2, el resto con 0
        llenarMatrizPrimeraFila(){
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++){
    
                    if (i == 0) {
                        this.matriz[i][j] = 2;
                    }else{
                        this.matriz[i][j] = 0;
                    }
                }
            }
            this.dibujarMatriz();
        }
        
    
        llenarMatrizPrimeraColumna(){
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++){
    
                    if (j == 0) {
                        this.matriz[i][j] = 2;
                    }else{
                        this.matriz[i][j] = 0;
                    }
                }
            }
            this.dibujarMatriz();
        }

        llenarMatrizDiagonal2(){
            // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) y la columna (j) están en la diagonal inversa,
                // asignamos 1 en esa posición.
                if ( j === this.columnas - 1 - i) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal inversa, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal inversa, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizBordes2() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila o columna,
                // estamos en el borde exterior de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0;
                } 
                // Si estamos en el borde del cuadrado interno, eliminamos ese borde asignando 0.
                else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 2;
                } 
                // Si estamos dentro del cuadrado interno, asignamos 2.
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizPiramide() {
       // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
       
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
      
        // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;
    
         for (let j = 0; j < this.columnas; j++) {
       if (j >= inicio && j <= fin) {
        this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
        } else {
        this.matriz[i][j] = 0; // Resto en 0
        }
        }
        }
        this.dibujarMatriz();
        }

        llenarMatrizCuatroBordes() {
            const mitadCol = Math.floor(this.columnas / 2);
            const mitadFila = Math.floor(this.filas / 2);
    
                for (let i = 0; i < this.filas; i++) {
                    for (let j = 0; j < this.columnas; j++) {
                        if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                            this.matriz[i][j] = 2;
                        } else {
                            this.matriz[i][j] = 0;
                        }
    /*
                        if(j == mitadCol) {
                            this.matriz[i][j] = 2;
                        }
                        if(j == mitadCol - 1) {
                            this.matriz[i][j] = 2;
                        }
    
                        if(j == mitadCol || j == mitadCol - 1) {
                            this.matriz[i][j] = 2;
                        }
    
                        if(i == mitadFila || i == mitadFila - 1) {
                            this.matriz[i][j] = 2;
                        }
    
                    }
                }
                this.dibujarMatriz();
    
        }

    llenarMatrizSecuencia1(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i == 0) {
                    this.matriz[i][j] = 1;
                }
                if (i == 1) {
                    this.matriz[i][j] = 2;
                }
                if (i == 2) {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia2(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 3
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia2_a(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = j % 3
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia_0_al_7(){
        this.vaciarMatriz();
        var puntero = 0;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if(puntero ==7){
                    puntero = -1;
                }
                puntero = puntero + 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia_0_al_7_Col(){
        this.vaciarMatriz();
        var puntero = 0;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[j][i] = puntero;
                if(puntero ==7){
                    puntero = -1;
                }
                puntero = puntero + 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia3(){
        this.vaciarMatriz();
        var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if(puntero ==0){
                    puntero = 8;
                }
                puntero = puntero - 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia4() {
        this.vaciarMatriz();
        var intercambio = "disminuir";
        var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero; 
                //////////////////////////////////////////////// 7 al 0
                if(intercambio == "disminuir") {
                    if(puntero ==0) {
                        //puntero = 8;
                        intercambio = "incrementar"
                    }
                    puntero = puntero - 1;
                }
                //////////////////////////////////////////////// 0 al 7
                if(intercambio == "incrementar") {
                    if(puntero == 7) {
                        //puntero = -1;
                        puntero = puntero - 1
                        intercambio = "disminuir"
                    }
                    puntero = puntero + 1;
                }
            }
        }
        this.dibujarMatriz();
    }
*/
    // PRACTICO -------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //1
    llenarMatrizConUnos() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    //2
    llenarMatrizMarcoInterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Verificar si es borde
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0;
                } else {
                    this.matriz[i][j] = 1;
                }
            }
        }
        this.dibujarMatriz();
    }

    //3
    llenarMatrizCruces() {
        this.vaciarMatriz();
        const filaCentral = Math.floor(this.filas / 2) -1;
        const columnaCentral = Math.floor(this.columnas / 2) -1;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Asigna 1 a la fila y columna centrales
                if (i === filaCentral || j === columnaCentral) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //4
    llenarMatrizBordesDiagonales() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 0;
                } else if (i === j || i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    //5
    llenarMatrizBandera() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i < this.filas / 3) {
                    this.matriz[i][j] = 1;
                } else if (i < 2 * this.filas / 3) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //6
    llenarMatrizRellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 2 === 0 ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    //7
    llenarMatrizZigZag() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i === j ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    //8
    llenarMatrizEspiral() {
        this.vaciarMatriz();
        let row = 0;
        let col = 0;
        let direction = 0; 
        let steps = 1;
        let stepCount = 0;
    
        for (let i = 0; i < this.columnas * this.filas; i++) {
            this.matriz[row][col] = 1;
    
            stepCount++;
    
            if (stepCount === steps) {
                stepCount = 0;
                direction = (direction + 1) % 4;
                if (direction % 2 === 0) {
                    steps++;
                }
            }
    
            switch (direction) {
                case 0: 
                    if (col + 1 >= this.columnas) {
                        break; 
                    }
                    col++;
                    break;
                case 1:
                    if (row + 1 >= this.filas) {
                        break;
                    }
                    row++;
                    break;
                case 2: 
                    if (col - 1 < 0) {
                        break; 
                    }
                    col--;
                    break;
                case 3:
                    if (row - 1 < 0) {
                        break; 
                    }
                    row--;
                    break;
            }
        }
    
        this.dibujarMatriz();
    }


    //9
    llenarMatrizTrianguloSuperiorIzquierdo() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    //10

    llenarMatrizTrianguloInferiorDerecho() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = this.columnas - i - 1; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    //11

    llenarMatrizCuadricula() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
        this.dibujarMatriz();
    }

    // 12
    llenarMatrizTrianguloCentral() {
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);

        for (let i = 1; i <= 5; i++) { 
            for (let j = centro - i + 1; j <= centro + i - 1; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    //13
    llenarMatrizRombosConcentricos() {
        this.vaciarMatriz(); 

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        
        const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
        
        // Dibuja rombo en la esquina superior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][j] = 0; // Cambia la zona del rombo a 0
                this.matriz[j][i] = 0;
            }
        }
        
        // Dibuja rombo en la esquina superior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 0;
                this.matriz[j][this.columnas - 1 - i] = 0;
            }
        }
        
        // Dibuja rombo en la esquina inferior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][j] = 0;
                this.matriz[this.filas - 1 - j][i] = 0;
            }
        }
        
        // Dibuja rombo en la esquina inferior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 0;
                this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 0;
                }
            }
        this.dibujarMatriz();
        }


    // 14
    llenarMatrizCrucesConcentricas() {
        this.vaciarMatriz();
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (
                    // Evitar columnas 2 y 8
                    j !== 1 && j !== 8 &&
                    
                    (
                        // Borde exterior de 1s
                        (i === 0 && j >= 2 && j <= columnas - 3) ||
                        (i === filas - 1 && j >= 2 && j <= columnas - 3) ||
                        (j === 0 && i >= 2 && i <= filas - 3) ||
                        (j === columnas - 1 && i >= 2 && i <= filas - 3) ||
    
                        // Segunda capa de 1s formando una cruz interna
                        (i === 2 && j >= 1 && j <= columnas - 2) ||
                        (i === filas - 3 && j >= 1 && j <= columnas - 2) ||
                        (j === 2 && i >= 1 && i <= filas - 2) ||
                        (j === columnas - 3 && i >= 1 && i <= filas - 2) ||
    
                        // Centro de la cruz
                        (i === Math.floor(filas / 2) && j >= 3 && j <= columnas - 4) ||
                        (j === Math.floor(columnas / 2) && i >= 3 && i <= filas - 4)
                    )
                ) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    

    //15

    llenarMatrizBanderaDiagonal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i >= j ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    //16

    llenarMatrizCuadradoDentroCuadrado() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Bordes externos
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Cuadrado interno de "2"
                else if ((i >= 2 && i <= this.filas - 3) && (j >= 2 && j <= this.columnas - 3)) {
                    // Bordes del cuadrado interno
                    if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                        this.matriz[i][j] = 2;
                    } else {
                        // Centro vacío del cuadrado interno
                        this.matriz[i][j] = 0;
                    }
                }
                // Resto del área intermedia
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //17

    llenarMatrizBordesCentro() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //18

    llenarMatrizLineasParalelas() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
        this.dibujarMatriz();
    }

    //19

    llenarMatrizMarcasCruz() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i % 4 === j % 4) ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    //20

    llenarMatrizRomboEsquinas() {
        this.vaciarMatriz();
        const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
        // Dibuja rombo en la esquina superior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][j] = 1;
                this.matriz[j][i] = 1;
            }
        }
        // Dibuja rombo en la esquina superior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 1;
                this.matriz[j][this.columnas - 1 - i] = 1;
            }
        }
        // Dibuja rombo en la esquina inferior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][j] = 1;
                this.matriz[this.filas - 1 - j][i] = 1;
            }
        }
        // Dibuja rombo en la esquina inferior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1;
                this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 1;
            }
        }
        this.dibujarMatriz();
    }

    //21

    llenarMatrizAjedrez() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i + j) % 2 === 0 ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    //22

    llenarMatrizRelojDeArena() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j >= i && j < this.columnas - i || j >= this.columnas - i - 1 && j <= i) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }
    
    
    
    
    

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz:` + valor);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#000000"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
                 this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
                 this.ctx.textAlign = "center";
                 this.ctx.textBaseline = "middle";
                 this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
                 this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#FFC300"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
                 this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
                 this.ctx.textAlign = "center";
                 this.ctx.textBaseline = "middle";
                 this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
                 this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a80909"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
                 this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
                 this.ctx.textAlign = "center";
                 this.ctx.textBaseline = "middle";
                 this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
                 this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
                 this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
                 this.ctx.textAlign = "center";
                 this.ctx.textBaseline = "middle";
                 this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
                 this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
}

    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
                 this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
                 this.ctx.textAlign = "center";
                 this.ctx.textBaseline = "middle";
                 this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
                this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
}

DibujarCinco(x, y, ancho, alto) {
    this.ctx.fillStyle = "#1d3235"; // Color para valor 2
    this.ctx.fillRect(x, y, ancho, alto);
    this.ctx.strokeStyle = "#ecf0f1";
    this.ctx.strokeRect(x, y, ancho, alto);
     // Agregar el texto "0" centrado en el rectángulo
             this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
             this.ctx.textAlign = "center";
             this.ctx.textBaseline = "middle";
             this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
             this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
}

DibujarSeis(x, y, ancho, alto) {
    this.ctx.fillStyle = "#5c9da6"; // Color para valor 2
    this.ctx.fillRect(x, y, ancho, alto);
    this.ctx.strokeStyle = "#ecf0f1";
    this.ctx.strokeRect(x, y, ancho, alto);
     // Agregar el texto "0" centrado en el rectángulo
             this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
             this.ctx.textAlign = "center";
             this.ctx.textBaseline = "middle";
             this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
             this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
}

DibujarSiete(x, y, ancho, alto) {
    this.ctx.fillStyle = "#a65c78"; // Color para valor 2
    this.ctx.fillRect(x, y, ancho, alto);
    this.ctx.strokeStyle = "#ecf0f1";
    this.ctx.strokeRect(x, y, ancho, alto);
     // Agregar el texto "0" centrado en el rectángulo
             this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
             this.ctx.textAlign = "center";
             this.ctx.textBaseline = "middle";
             this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
             this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
}
}