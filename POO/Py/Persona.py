class Persona:
    def __init__(self, nombre, edad, carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad

    def saludar(self):
        return f'Hola, mi nombre es {self.nombre} y tengo {self.edad} años.'

    def cumpleanios(self):
        return f'¡Felicidades! tienes {self.edad} años.'

    def estudiar(self):
        return f'Estoy estudiando {self.carrera}'

    def mostrar_universidad(self):
        return f'Mi universidad es la {self.universidad}'

    def modificar_nombre(self):
        while True:
            nuevo_nombre = input("Ingrese su nuevo nombre: ")
            if nuevo_nombre.isalpha():
                self.nombre = nuevo_nombre
                break
            else:
                print("Nombre inválido, por favor ingrese solo letras.")
        return f'Hola, mi nuevo nombre es {self.nombre} y tengo {self.edad} años.'

    def modificar_cumpleanios(self):
        while True:
            try:
                nueva_edad = int(input("Ingrese su nueva edad: "))
                if nueva_edad > 0:
                    self.edad = nueva_edad
                    break
                else:
                    print("La edad es incorrecta. Ingrese una edad válida.")
            except ValueError:
                print("La edad debe ser un número entero.")
        return f'Ahora tengo {self.edad} años.'

    def modificar_estudiar(self):
        while True:
            nueva_carrera = input("Ingrese su nueva carrera: ")
            if nueva_carrera.isalpha():
                self.carrera = nueva_carrera
                break
            else:
                print("Carrera inválida, por favor ingrese solo letras.")
        return f'Ahora estudio {self.carrera}'

    def modificar_universidad(self):
        while True:
            nueva_universidad = input("Ingrese su nueva universidad: ")
            if nueva_universidad.isalpha():
                self.universidad = nueva_universidad
                break
            else:
                print("Universidad inválida, por favor ingrese solo letras.")
        return f'Mi nueva universidad es {self.universidad}'

    def eliminar_nombre(self):
        self.nombre = None
        return "Nombre eliminado."

    def eliminar_cumpleanios(self):
        self.edad = None
        return "Edad eliminada."

    def eliminar_estudiar(self):
        self.carrera = None
        return "Carrera eliminada."

    def eliminar_universidad(self):
        self.universidad = None
        return "Universidad eliminada."


# Crear una instancia de la clase Persona
persona = Persona('Leandro', 18, 'Ingeniería Industrial', 'UCB')

# Menú para interactuar con la persona
while True:
    print("\nMenú:")
    print("1. Saludar")
    print("2. Cumpleaños")
    print("3. Estudiar")
    print("4. Universidad")
    print("5. Modificar nombre")
    print("6. Modificar edad")
    print("7. Modificar carrera")
    print("8. Modificar universidad")
    print("9. Eliminar nombre")
    print("10. Eliminar edad")
    print("11. Eliminar carrera")
    print("12. Eliminar universidad")
    print("13. Salir")
    
    opcion = input("Ingrese una opción: ")
    
    if opcion == "1":
        print(persona.saludar())
    elif opcion == "2":
        print(persona.cumpleanios())
    elif opcion == "3":
        print(persona.estudiar())
    elif opcion == "4":
        print(persona.mostrar_universidad())
    elif opcion == "5":
        print(persona.modificar_nombre())
    elif opcion == "6":
        print(persona.modificar_cumpleanios())
    elif opcion == "7":
        print(persona.modificar_estudiar())
    elif opcion == "8":
        print(persona.modificar_universidad())
    elif opcion == "9":
        print(persona.eliminar_nombre())
    elif opcion == "10":
        print(persona.eliminar_cumpleanios())
    elif opcion == "11":
        print(persona.eliminar_estudiar())
    elif opcion == "12":
        print(persona.eliminar_universidad())
    elif opcion == "13":
        print("Adiós!")
        break
    else:
        print("Opción inválida. Por favor, ingrese una opción válida.")