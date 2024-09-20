class Cadena:
    def __init__(self, cadena):
        self.cadena = cadena

    def get_cadena(self):  # Obtiene el valor asignado a la cadena
        return self.cadena

    # Manipulación de cadenas
    def concatenar(self, otra_cadena):  # Unir una cadena con otra
        self.cadena += otra_cadena

    def invertir(self):  # Invertir los caracteres de la cadena
        self.cadena = self.cadena[::-1]

    # Comparaciones
    def es_vacia(self):  # Compara si la cadena no tiene caracteres
        return len(self.cadena) == 0

    def contiene(self, subcadena):  # Compara si la subCadena existe dentro de la cadena
        return subcadena in self.cadena

    def comienza_con(self, prefijo):  # Compara si la cadena comienza con el prefijo "caracter"
        return self.cadena.startswith(prefijo)

    def termina_con(self, sufijo):  # Compara si la cadena termina con el sufijo "caracter"
        return self.cadena.endswith(sufijo)

    # Otras operaciones
    def longitud(self):  # Obtiene la cantidad de caracteres que tiene la cadena
        return len(self.cadena)

    def a_mayusculas(self):  # Obtiene la cadena transformada en MAYÚSCULA
        return self.cadena.upper()

    def a_minusculas(self):  # Obtiene la cadena transformada en minúscula
        return self.cadena.lower()

# Ejemplo de uso
cadena = Cadena('')

def ejecutar(metodo, valor_input=''):
    resultado = ''
    if metodo == 'getCadena':
        resultado = f'Cadena: {cadena.get_cadena()}'
    elif metodo == 'concatenar':
        cadena.concatenar(valor_input)
        resultado = f'Cadena actual: {cadena.get_cadena()}'
    elif metodo == 'invertir':
        cadena.invertir()
        resultado = f'Cadena invertida: {cadena.get_cadena()}'
    elif metodo == 'esVacia':
        resultado = f'¿Es vacía?: {cadena.es_vacia()}'
    elif metodo == 'contiene':
        resultado = f'¿Contiene "{valor_input}"?: {cadena.contiene(valor_input)}'
    elif metodo == 'comienzaCon':
        resultado = f'¿Comienza con "{valor_input}"?: {cadena.comienza_con(valor_input)}'
    elif metodo == 'terminaCon':
        resultado = f'¿Termina con "{valor_input}"?: {cadena.termina_con(valor_input)}'
    elif metodo == 'longitud':
        resultado = f'Longitud: {cadena.longitud()}'
    elif metodo == 'aMayusculas':
        resultado = f'A mayúsculas: {cadena.a_mayusculas()}'
    elif metodo == 'aMinusculas':
        resultado = f'A minúsculas: {cadena.a_minusculas()}'
    else:
        resultado = 'Método no reconocido.'

    return resultado

# Ejemplo de uso
print(ejecutar('concatenar', 'Hola '))
print(ejecutar('getCadena'))
print(ejecutar('invertir'))
print(ejecutar('longitud'))
