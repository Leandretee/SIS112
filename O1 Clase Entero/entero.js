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