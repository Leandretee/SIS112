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
        const centro = Math.floor(this.filas / 2);
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === centro || j === centro) {
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
            this.matriz[i][0] = 1; //Para el borde Izquierdo
            this.matriz[i][this.columnas - 1] = 1; //Para el borde derecho
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[0][j] = 1; //Para el borde de arriba
                this.matriz[this.filas - 1][j] = 1; //Para el borde de abajo 
                for (let i = 2; i <= 6; i++) {
                    this.matriz[i][i] = 2;//Diagonal 
                    this.matriz[i][this.columnas - 1 - i] = 2; //Diagonal inversa
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
        let top = 0;
        let bottom = this.filas - 1;
        let left = 0;
        let right = this.columnas - 1;

        while (top <= bottom && left <= right) {
            // Rellenar la fila superior
            for (let i = left; i <= right; i++) {
                this.matriz[top][i] = 1;
            }
            top++;

            // Rellenar la columna derecha
            for (let i = top; i <= bottom; i++) {
                this.matriz[i][right] = 1;
            }
            right--;

            // Rellenar la fila inferior
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    this.matriz[bottom][i] = 1;
                }
                bottom--;
            }

            // Rellenar la columna izquierda
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    this.matriz[i][left] = 1;
                }
                left++;
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
        const centro = Math.floor(this.filas / 2);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Calcular la distancia al centro
                const distancia = Math.max(Math.abs(centro - i), Math.abs(centro - j));

                // Rellenar con 1 si la distancia es menor o igual a la cantidad de capas
                if (distancia < centro) {
                    this.matriz[i][j] = 1;
                }
            }
        }

        this.dibujarMatriz();
    }

    // 14
    llenarMatrizCrucesConcentricas() {
        this.vaciarMatriz();
        const centro = Math.floor(this.filas / 2);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Calcular la distancia al centro
                const distancia = Math.max(Math.abs(centro - i), Math.abs(centro - j));

                // Rellenar con 1 si la distancia es menor o igual a la cantidad de capas
                if (distancia < centro) {
                    this.matriz[i][j] = 1;
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
        const romboAltura = 3; // Altura del rombo

        // Rellenar el rombo en la esquina superior izquierda
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1; // Parte superior del rombo
                this.matriz[i][this.columnas - 1 - j] = 1; // Parte derecha del rombo
            }
        }

        // Rellenar el rombo en la esquina superior derecha
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 1; // Parte superior del rombo
                this.matriz[i][j] = 1; // Parte izquierda del rombo
            }
        }

        // Rellenar el rombo en la esquina inferior izquierda
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[this.filas - 1 - i][j] = 1; // Parte inferior del rombo
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1; // Parte derecha del rombo
            }
        }

        // Rellenar el rombo en la esquina inferior derecha
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1; // Parte inferior del rombo
                this.matriz[this.filas - 1 - i][j] = 1; // Parte izquierda del rombo
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
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
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
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
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
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
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