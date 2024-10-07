class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.actualizarLista();
    }

    actualizarLista() {
        const listaElemento = document.getElementById('lista');
        listaElemento.innerHTML = '';
        this.lista.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            listaElemento.appendChild(li);
        });
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
        } else {
            alert('Número no encontrado.');
        }
    }

    ordenar() {
        this.lista.sort(); // Orden alfabético
        this.actualizarLista();
    }
}

let miLista = new ListaCadenas();
miLista.agregar('Hola') //4 - 0
miLista.agregar('Mundo') // 5 - 1
miLista.agregar('UCB') // 

//Retornar la cadena con mayor caracteres
/*
// var = let
//----------------------------------HOLA
var a = miLista.lista[0]
console.log(a);
var aCant = a.length;
console.log(a.length); // 5
//--------------------------------------MUNDO
var b = miLista.lista[1]
console.log(b);
var bCant = b.length;
console.log(b.length); // 4
//--------------------------------------UCB
var c = miLista.lista[2]
console.log(c);
var cCant = c.length;
console.log(c.length); // 3
//--------------------------------Buscar el mayor
var mayor = 0;
var posicion = -1;
if (aCant > mayor) {
    mayor = aCant;
    posicion = 0;
}
//-*-----
if (bCant > mayor) {
    mayor = bCant;
    posicion = 1;
}
//------------
if (cCant > mayor) {
    mayor = cCant;
    posicion = 2;
}

console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);
*/
//REALIZAR EL MISMO EJERCICIO UTILIZANDO UN FOR

let mayor = 0;
let posicion = -1;

// Recorremos la lista con un for
for (let i = 0; i < miLista.lista.length; i++) {
    let longitud = miLista.lista[i].length;

    console.log(miLista.lista[i], longitud); // Imprime la cadena y su longitud

    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
    }
}

// Mostramos el resultado
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);

console.log(miLista.lista); // Imprime: ['Hola', 'Mundo'm 'UCB']


function agregar() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        miLista.agregar(valor);
        document.getElementById('inputValor').value = '';
    } else {
        alert('Por favor, ingresa un valor.');
    }
}

function eliminar() {
    const valor = document.getElementById('inputEliminar').value;
    miLista.eliminar(valor);
    document.getElementById('inputEliminar').value = '';
}

function ordenar() {
    miLista.ordenar();
}