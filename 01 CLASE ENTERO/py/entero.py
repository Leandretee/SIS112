class Entero:
    def __init__(self, Numero):
        self.Num = Numero

    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num
    
    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return (self.Num % 2 == 0)
    
    def esPositivoNegativo(self):
        return (self.Num > 0)
    
    def factorial(self):
        if self.Num < 0:
            return "El factorial no está definido para números negativos"
        resultado = 1
        for i in range(1, self.Num + 1):
            resultado *= i
        return resultado

    def esPerfecto(self):
        if self.Num <= 1:
            return False
        suma_divisores = sum(i for i in range(1, self.Num) if self.Num % i == 0)
        return suma_divisores == self.Num

    def esPrimo(self):
        if self.Num <= 1:
            return False
        if self.Num <= 3:
            return True
        if self.Num % 2 == 0 or self.Num % 3 == 0:
            return False
        i = 5
        while i * i <= self.Num:
            if self.Num % i == 0 or self.Num % (i + 2) == 0:
                return False
            i += 6
        return True

    def calcularFibonacci(self):
        if self.Num < 0:
            return "La posición en la secuencia de Fibonacci no puede ser negativa"
        a, b = 0, 1
        if self.Num == 0:
            return a
        for _ in range(2, self.Num + 1):
            a, b = b, a + b
        return b

    def menu(self):
        while True:
            print("\nMenu: ")
            print("1. Establecer un nuevo numero")
            print("2. Mostrar el numero actual")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es par o impar")
            print("6. Calcular el factorial")
            print("7. Verificar si es un número perfecto")
            print("8. Verificar si es un número primo")
            print("9. Calcular el número de Fibonacci ")
            print("10. Salir")

            opcion = input("Ingrese una opcion: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '4':
                self.decrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El numero es par")
                else:
                    print("El numero es impar")
            elif opcion == '6':
                print(f"Factorial de {self.getNum()}: {self.factorial()}")
            elif opcion == '7':
                if self.esPerfecto():
                    print("Es un número perfecto")
                else:
                    print("No es un número perfecto")
            elif opcion == '8':
                if self.esPrimo():
                    print("Es un número primo")
                else:
                    print("No es un número primo")
            elif opcion == '9':
                print(f"{self.getNum()}Fibonacci: {self.calcularFibonacci()}")
            elif opcion == '10':
                print("Hasta luego!")
                break
            else:
                print("Opcion invalida. Intente nuevamente")

# Crear un objeto de la clase Entero
numero = Entero(10)

# Iniciar el menu
numero.menu()