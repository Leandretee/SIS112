class ListaEnteros:
    def __init__(self):
        self.lista = []

    def agregar(self, valor):
        self.lista.append(valor)


mi_lista = ListaEnteros()
mi_lista.agregar(5)
mi_lista.agregar(2)
print(mi_lista.lista) # Imprime: [5, 2]