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