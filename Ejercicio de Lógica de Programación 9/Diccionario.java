package Ejercicios;
import java.util.HashMap;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        // Crear un diccionario Español-Inglés
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("gato", "cat");
        diccionario.put("perro", "dog");
        diccionario.put("casa", "house");
        // Agregar más palabras y traducciones al diccionario

        Scanner scanner = new Scanner(System.in);

        // Solicitar una palabra en español al usuario
        System.out.print("Ingrese una palabra en español: ");
        String palabraEspañol = scanner.nextLine().toLowerCase();

        // Buscar la traducción en el diccionario
        if (diccionario.containsKey(palabraEspañol)) {
            String palabraIngles = diccionario.get(palabraEspañol);
            System.out.println("La traducción al inglés es: " + palabraIngles);
        } else {
            System.out.println("La palabra no se encuentra en el diccionario");
        }

        scanner.close();
    }
}
