class Entero {
    //Atributos
    Num;

    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }

    //CLASS- Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }

    //CLASS- Obtener valor de Num
    getNum() {
        return this.Num;
    }

    //CLASS- Mostrar el valor de Num
    showNum(){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.Num;
    }

    showResultado(respuesta){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }

    esParImpar(){
        return(this.Num % 2 == 0)
    }

    esPositivoNegativo() {
        return (this.Num > 0)
    }

    esFactorial(){
        if (this.Num < 0) return "No hay factorial de numero negativos";
        let factorial = 1, i = this.Num;
        while (i > 1) factorial *= i--;
        return factorial;
    }

    esPerfecto(){
        let suma = 0;  // Inicializamos una variable para almacenar la suma de divisores

        // Recorremos desde 1 hasta Num-1 para encontrar los divisores
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {  // Si i es divisor de Num
                suma += i;  // Añadimos i a la suma
            }
        } 
        // Comprobamos si la suma de los divisores es igual al número
        return suma === this.Num;
    }

    esPrimo() {
        if (this.Num <= 1) return false;
        if (this.Num <= 3) return true;
        if (this.Num % 2 === 0 || this.Num % 3 === 0) return false;
        for (let i = 5; i * i <= this.Num; i += 6) {
            if (this.Num % i === 0 || this.Num % (i + 2) === 0) return false;
        }
        return true;
    }

    calcularFibonacci() {
        if (this.Num < 0) return "La posición en la secuencia de Fibonacci no puede ser negativa";
        let a = 0, b = 1, c;
        if (this.Num === 0) return a;
        for (let i = 2; i <= this.Num; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear el objeto
function cargarNum(){
    ClaseEntero.setNum();
}

//Mostrar el valor de Num en HTML
function mostrarNum(){
    var valorNum = ClaseEntero.showNum();
}

//Incremetar el valor de Num
function incrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

//Decrementar el valor de Num
function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

//Verifica si es Par o Impar
function esParImparValorNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar"
    ClaseEntero.showResultado(resp)
}

//Verifica si es Positivo o Negativo
function esPositivoNegativoValorNum(){
    var respuesta = ClaseEntero.esPositivoNegativo();
    var resp = respuesta ? "Es Num Positivo":"Es Num Negativo"
    ClaseEntero.showResultado(resp)
}

function esFactorialNum(){
    var respuesta = ClaseEntero.esFactorial();
    ClaseEntero.showResultado("Factorial:" + respuesta)
}

function esPerfectoNum(){
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es Num perfecto":"No es Num perfecto"
    ClaseEntero.showResultado(resp)
}

// Verificar si el número es primo
function esPrimoValorNum() {
    var respuesta = ClaseEntero.esPrimo();
    var resp = respuesta ? "Es un número primo" : "No es un número primo";
    ClaseEntero.showResultado(resp);
}

// Calcular el número de Fibonacci en la posición dada
function calcularFibonacciValorNum() {
    var respuesta = ClaseEntero.calcularFibonacci();
    ClaseEntero.showResultado(`Número en la posición ${ClaseEntero.getNum()} de Fibonacci: ${respuesta}`);
}