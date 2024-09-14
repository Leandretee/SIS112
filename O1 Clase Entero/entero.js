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

    esFactorial() {
        const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    }

    esPerfecto(){
        function isPerfect(n) {
            let sum = 0;
            for (let i = 1; i < n; i++) {
              if (n % i === 0) {
                sum += i;
              }
            }
            return sum === n;
          }
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

//Numfunction factorial(n) {
    function esFactorial(n) {
        ClaseEntero.esFactorial();
        ClaseEntero.showNum();
      }

//Verificar si es perfecto
function esPerfecto(){
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es Perfecto":"No es Perfecto"
    ClaseEntero.showResultado(resp)
}