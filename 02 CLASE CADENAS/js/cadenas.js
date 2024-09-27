class Cadena {
  constructor(cadena) {
      this.cadena = cadena;
  }

  getCadena() {
      return this.cadena;
  }

  concatenar(otraCadena) {
      this.cadena += otraCadena;
  }

  invertir() {
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
          cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
  }

  esVacia() {
      return this.cadena.length === 0;
  }

  contiene(subcadena) {
      return this.cadena.includes(subcadena);
  }

  comienzaCon(prefijo) {
      return this.cadena.startsWith(prefijo);
  }

  terminaCon(sufijo) {
      return this.cadena.endsWith(sufijo);
  }

  longitud() {
      return this.cadena.length;
  }

  aMayusculas() {
      return this.cadena.toUpperCase();
  }

  aMinusculas() {
      return this.cadena.toLowerCase();
  }

  numeroARomano(num) {
      if (num < 1 || num > 1000000) {
          throw new Error("El número debe estar entre 1 y 1,000,000.");
      }

      const romanos = [
          { valor: 1000000, simbolo: 'M̅' },
          { valor: 900000, simbolo: 'CM̅' },
          { valor: 500000, simbolo: 'D̅' },
          { valor: 400000, simbolo: 'CD̅' },
          { valor: 100000, simbolo: 'C̅' },
          { valor: 90000, simbolo: 'XC̅' },
          { valor: 50000, simbolo: 'L̅' },
          { valor: 40000, simbolo: 'XL̅' },
          { valor: 10000, simbolo: 'X̅' },
          { valor: 9000, simbolo: 'IX̅' },
          { valor: 5000, simbolo: 'V̅' },
          { valor: 4000, simbolo: 'IV̅' },
          { valor: 1000, simbolo: 'M' },
          { valor: 900, simbolo: 'CM' },
          { valor: 500, simbolo: 'D' },
          { valor: 400, simbolo: 'CD' },
          { valor: 100, simbolo: 'C' },
          { valor: 90, simbolo: 'XC' },
          { valor: 50, simbolo: 'L' },
          { valor: 40, simbolo: 'XL' },
          { valor: 10, simbolo: 'X' },
          { valor: 9, simbolo: 'IX' },
          { valor: 5, simbolo: 'V' },
          { valor: 4, simbolo: 'IV' },
          { valor: 1, simbolo: 'I' }
      ];

      let resultado = '';

      for (const { valor, simbolo } of romanos) {
          while (num >= valor) {
              resultado += simbolo;
              num -= valor;
          }
      }

      return resultado;
  }

  generarTexto(numPalabras) {
      const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let textoAleatorio = '';

      for (let i = 0; i < numPalabras; i++) {
          const longitudPalabra = Math.floor(Math.random() * 5) + 3;
          let palabra = '';

          for (let j = 0; j < longitudPalabra; j++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              palabra += caracteres[indiceAleatorio];
          }

          textoAleatorio += palabra + (i < numPalabras - 1 ? ' ' : '');
      }

      return textoAleatorio;
  }

  numeroAASCII(num) {
      if (num < 0 || num > 127) {
          throw new Error("El número debe estar entre 0 y 127.");
      }
      return String.fromCharCode(num);
  }
}

// Ejemplo de uso
let cadena = new Cadena('');

// Método para ejecutar acciones
function ejecutar(metodo) {
  const input = document.getElementById('inputCadena');
  const resultadoDiv = document.getElementById('resultado');
  const valorInput = input.value;

  switch (metodo) {
      case 'getCadena':
          resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
          break;
      case 'concatenar':
          cadena.concatenar(valorInput);
          resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
          break;
      case 'invertir':
          cadena.invertir();
          resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
          break;
      case 'esVacia':
          resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
          break;
      case 'contiene':
          resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
          break;
      case 'comienzaCon':
          resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
          break;
      case 'terminaCon':
          resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
          break;
      case 'longitud':
          resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
          break;
      case 'aMayusculas':
          resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
          break;
      case 'aMinusculas':
          resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
          break;
      case 'numeroARomano':
          const numero = parseInt(valorInput, 10);
          try {
              resultadoDiv.innerHTML = `${numero} en números romanos es: ${cadena.numeroARomano(numero)}`;
          } catch (error) {
              resultadoDiv.innerHTML = error.message;
          }
          break;
      case 'generarTexto':
          const numPalabras = parseInt(valorInput, 10);
          resultadoDiv.innerHTML = `Texto aleatorio: "${cadena.generarTexto(numPalabras)}"`;
          break;
      case 'numeroAASCII':
          const numASCII = parseInt(valorInput, 10);
          try {
              resultadoDiv.innerHTML = `${numASCII} en ASCII es: ${cadena.numeroAASCII(numASCII)}`;
          } catch (error) {
              resultadoDiv.innerHTML = error.message;
          }
          break;
      default:
          resultadoDiv.innerHTML = 'Método no reconocido.';
  }
}