class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }

    Universidad() {
      return 'Mi universidad es la Catolica de Santa Cruz ' + this.universidad;
    }

    modificar_nombre() {
        this.nombre = prompt("Ingresar tu nuevo nombre")
        while (!this.nombre ||!isNaN(this.nombre)) {
            alert("Nombre invalido, Coloque letras para su nombre porfavor");
            this.nombre = prompt("Ingrese nuevamente el nombre");
        }
        return 'Hola, mi nuevo nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
      }
    
    modificar_cumpleanios() {
        this.edad = prompt ('ingrese su nueva edad');
    while (this.edad  <=0){
        alert("La edad es incorrecta. Ingrese una edad válida");
      ;
    }
    if (this.edad < 0) {
      this.edad = prompt ('ingrese nuevamente su edad')
      return 'Ahora tengo ' + this.edad + ' años ';
    }
      }
    
    modificar_estudiar() {
        this.carrera = prompt("Ingresar su nueva carrera")
        while (!this.carrera || !isNaN(this.carrera)) {
            alert("Carrera invalida, Coloque letras para su carrera");
            this.carrera = prompt("Ingrese nuevamente su carrera");
        }
        return 'Ahora estudio ' + this.carrera;
      }
  
    modificar_Universidad() {
        this.universidad = prompt("Ingresar su nueva universidad")
        while (!this.universidad || !isNaN(this.universidad)) {
            alert("Universidad invalida, coloque letras porfavor");
            this.universidad = prompt("Ingrese nuevamente su universidad");
        }
        return 'Mi nueva universidad es ' + this.universidad;
      }

    eliminar_nombre() {
        delete 'Hola, mi nuevo nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }

    eliminar_cumpleanios() {
        delete '¡Felicidades! ahora tienes ' + this.edad + ' años.'
    }

    eliminar_estudiar() {
        delete 'Ahora estudio ' + this.carrera
    }

    eliminar_universidad() {
        delete 'Mi nueva universidad es ' + this.universidad
    }
  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Leandro', 18, 'Ingeniería Industrial', 'UCB');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

  function botonModificar_Saludo() {
    saludar.textContent = persona.modificar_nombre();
  }

  function botonModificar_Cumpleanios() {
    edad.textContent = persona.modificar_cumpleanios();
  }

  function botonModificar_Estudiar() {
    carrera.textContent = persona.modificar_estudiar();
  }

  function botonModificar_Universidad() {
    universidad.textContent = persona.modificar_Universidad();
  }

  function botonEliminar_Saludo(){
    saludar.textContent = persona.eliminar_nombre();
  }

  function botonEliminar_Cumpleanios(){
    edad.textContent = persona.eliminar_cumpleanios();
  }

  function botonEliminar_Estudiar(){
    carrera.textContent = persona.eliminar_estudiar();
  }

  function botonEliminar_Universidad(){
    universidad.textContent = persona.eliminar_universidad();
  }