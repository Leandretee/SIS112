class ListaEnteros {
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

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
        this.actualizarLista();
    }
}

const miLista = new ListaEnteros();
miLista.agregar(21);
miLista.agregar(12);
miLista.agregar(15);
miLista.agregar(30);
console.log(miLista.lista); //Imprime: [21,12,15,30]

var a = miLista.lista[0];
console.log(a);

var b = miLista.lista[1];
console.log(b);

var c = miLista.lista[2];
console.log(c);

var d = miLista.lista[3];
console.log(d);

// RETORNAR EL ELEMENTO MENOR DE LA LISTA,
/*
var datoMenor = -1;

var a = miLista.lista[0];
if(a > datoMenor){
    datoMenor = a;
}
console.log("datoMenor:" + datoMenor);
//-------------------------------------------------------------------------------
var b = miLista.lista[1];
if(a > b){
    datoMenor = b;
}
console.log("Dato Menor:" + datoMenor);
//------------------------------------------------------------------------------
var c = miLista.lista[2];
if(b > c){
    datoMenor = c;
}
console.log("Dato Menor:" + datoMenor);
//--------------------------------------------------------------------------------
var d = miLista.lista[3];
if(c > d){
    datoMenor = d;
}
console.log("Dato Menor:" + datoMenor);
//--------------------------------------------------------------
*/

var datoMenor = miLista.lista[0];
for (var i = 1; i < miLista.lista.length; i++) {
    if (miLista.lista[i] < datoMenor) {
        datoMenor = miLista.lista[i];
    }
}
console.log("Dato Menor:" + datoMenor);
//----------------------------------------------------------------------

var datoMayor = miLista.lista[0];

for (var i = 1; i < miLista.lista.length; i++) {
    datoMayor = datoMayor > miLista.lista[i] ? datoMayor : miLista.lista[i];
}

console.log("Dato Mayor: " + datoMayor);
//----------------------------------------------------------------------

document.getElementById('agregarBtn').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('numero').value);
    if (!isNaN(valor)) {
        miLista.agregar(valor);
        document.getElementById('numero').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

document.getElementById('eliminarBtn').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('numeroEliminar').value);
    if (!isNaN(valor)) {
        miLista.eliminar(valor);
        document.getElementById('numeroEliminar').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingresa un número válido para eliminar.');
    }
});

document.getElementById('buscarBtn').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('numeroBuscar').value);
    if (!isNaN(valor)) {
        const index = miLista.buscar(valor);
        if (index !== -1) {
            alert(`Número ${valor} encontrado en la posición ${index}.`);
        } else {
            alert('Número no encontrado.');
        }
        document.getElementById('numeroBuscar').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingresa un número válido para buscar.');
    }
});

document.getElementById('ordenarBtn').addEventListener('click', () => {
    miLista.ordenar();
});