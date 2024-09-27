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