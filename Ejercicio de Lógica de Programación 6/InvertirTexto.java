package Ejercicios;
import java.util.Scanner;

public class InvertirTexto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar una palabra o frase al usuario
        System.out.print("Ingrese una palabra o frase: ");
        String texto = scanner.nextLine();

        // Llamar a la función para invertir el texto
        String textoInvertido = invertirTexto(texto);

        // Mostrar el texto invertido por consola
        System.out.println("Texto invertido: " + textoInvertido);

        scanner.close();
    }

    // Función para invertir el texto
    public static String invertirTexto(String texto) {
        StringBuilder textoInvertido = new StringBuilder(texto);
        return textoInvertido.reverse().toString();
    }
}
