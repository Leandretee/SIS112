// See https://aka.ms/new-console-template for more information
using System.Diagnostics;
using System.IO.Enumeration;
using System.Runtime.Versioning;

Console.WriteLine("Hello, World!");

using System
using System.Collections.Generic
using System.Diagnostics

public class Navegador
{
    private Stack<string> historial = new Stack<string>();

    public void Visitar(string url)
    {
        historial.Push(url);
        Console.WriteLine($"Visita: {url}");
        Process.Start(new ProcessStartInfo)
            {
                FileName = "chrome.exe",
                Arguments = urlAnterior,
                UseShellExecute = true
            }
    }
}

    public void MostrarHistorial()
    {
        Console.WriteLine("Historial de navegación:");
        foreach (var url)
    }


class Program
{
    static void Main()
    {
        Navegador navegador = new Navegador();

        while (true)
        {
            Console.WriteLine("Menú de Opciones:");
            Console.WriteLine("1. Visitar Google");
            Console.WriteLine("2. Visitar OpenAI");
            Console.WriteLine("3. Visitar YouTube");
            Console.WriteLine("4. Volver a la anterior URL");
            Console.WriteLine("5. Salir");
            Console.WriteLine("Elige una opción (1-5): ");

            string opcion = Console.ReadLine();

            switch (opcion)
            {
                case "1":
                    AbrirURL("https://www.google.com", navegador);
                    break;
                case "2":
                    AbrirURL("https://www.google.com", navegador);
                    break;
                case "3":
                    AbrirURL("https://www.youtube.com", navegador);
                    break;
                case "4":
                    navegador.Regresar();
                    break;
                case "5":
                    Console.WriteLine("Saliendo del programa...");
                    return;
                default:
                    Console.WriteLine("Opción no válida. Inténtalo de nuevo.")
                    break;
            }






        }
    }
}



int[] arr = {1, 2, 3, 8};
List<int[]> permutations = new List<int[]>()
permutations = GeneratePermutations(arr, 0, arr.Lenght -1, permutations);

foreach (int[] permutation in permutations)
{
    Console.WriteLine(string.Join(", ", permutation));
}

static List<int[]> GeneratePermutations(int[] arr, int l, int r, List<int[]> permutationsList)
{
    if (l == r)
    {
        int[] permutation = new int[arr.Length];
        Array.Copy(arr, 0, permutation, 0, arr.Length);
        permutationsList.Add(permutation);
        return permutationsList;
    }
    for (int i = l; i <= r; i++)
    {
        Swap(arr, l, i);
        permutationsList = GeneratePermutations(arr, l + 1, r, permutationsList);
        Swap(arr, l, i);
    } 
    return permutationsList;
}
static void Swap(int[], arr, int i, int j)
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}