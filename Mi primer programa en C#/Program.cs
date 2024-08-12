namespace Mi_primer_programa_en_C_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostar un Hola mundo
        //HelloWorld();

        //Segundo metodo, mostrar la edad ingresada por el usuario
        //ObtenerEdad();

        CalculateAge();

    }

    public static void HelloWorld(){
        Console.WriteLine("Hello World!");
    }
    
    public static void ObtainAge()
    {
        Console.WriteLine("Put your age:");
        string? edadInput = Console.ReadLine();
        if (string.IsNullOrEmpty(edadInput))
        {
            Console.WriteLine("Put a value");
        }
        else
        {
            int edadInteger = Int32.Parse(edadInput);
            Console.WriteLine("Your age is: " + edadInteger);
        }
}
public static void CalculateAge(){
    Console.WriteLine("Put your born year: ");
    string? anioNacimientoInput = Console.ReadLine();
    if (string.IsNullOrEmpty(anioNacimientoInput))
    {
        Console.WriteLine("Put a worth value");
    }
    else
    {
        int anioNacimiento = Int32.Parse(anioNacimientoInput);
        Console.WriteLine("Your calculated age is: "+(2024 - anioNacimiento)); 
    }
}
}