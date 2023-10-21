package Ejercicios;
import java.util.HashMap;
import java.util.Random;
import java.util.Scanner;

public class JuegoDiccionario {
    public static void main(String[] args) {
        // Crear un diccionario Español-Inglés
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("gato", "cat");
        diccionario.put("perro", "dog");
        diccionario.put("casa", "house");
        // Agregar más palabras y traducciones al diccionario

        // Seleccionar 5 palabras al azar del diccionario
        String[] palabrasSeleccionadas = seleccionarPalabrasAlAzar(diccionario, 5);

        Scanner scanner = new Scanner(System.in);
        int respuestasCorrectas = 0;
        int respuestasIncorrectas = 0;

        // Pedir al usuario las traducciones
        for (String palabraEspañol : palabrasSeleccionadas) {
            System.out.print("Traduzca '" + palabraEspañol + "' al inglés: ");
            String respuestaUsuario = scanner.nextLine().toLowerCase();
            String traduccionCorrecta = diccionario.get(palabraEspañol);

            if (respuestaUsuario.equals(traduccionCorrecta)) {
                System.out.println("¡Respuesta correcta!");
                respuestasCorrectas++;
            } else {
                System.out.println("Respuesta incorrecta. La traducción correcta es '" + traduccionCorrecta + "'");
                respuestasIncorrectas++;
            }
        }

        // Mostrar resultados
        System.out.println("\nResultados del juego:");
        System.out.println("Respuestas correctas: " + respuestasCorrectas);
        System.out.println("Respuestas incorrectas: " + respuestasIncorrectas);

        scanner.close();
    }

    // Función para seleccionar palabras al azar del diccionario
    public static String[] seleccionarPalabrasAlAzar(HashMap<String, String> diccionario, int cantidad) {
        String[] palabras = diccionario.keySet().toArray(new String[0]);
        Random random = new Random();
        String[] palabrasSeleccionadas = new String[cantidad];
        for (int i = 0; i < cantidad; i++) {
            palabrasSeleccionadas[i] = palabras[random.nextInt(palabras.length)];
        }
        return palabrasSeleccionadas;
    }
}
