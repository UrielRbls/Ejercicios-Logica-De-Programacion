package Ejercicios;
import java.util.Scanner;

public class NumerosPrimosAlInicio {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numeros = new int[10];
        int[] numerosPrimos = new int[10];
        int[] otrosNumeros = new int[10];
        int indicePrimos = 0;
        int indiceOtros = 0;

        // Solicitar al usuario 10 números
        for (int i = 0; i < 10; i++) {
            System.out.print("Ingrese un número: ");
            numeros[i] = scanner.nextInt();
        }

        // Identificar y separar los números primos
        for (int i = 0; i < 10; i++) {
            if (esPrimo(numeros[i])) {
                numerosPrimos[indicePrimos] = numeros[i];
                indicePrimos++;
            } else {
                otrosNumeros[indiceOtros] = numeros[i];
                indiceOtros++;
            }
        }

        // Mostrar el array original
        System.out.println("Array original:");
        mostrarArray(numeros);

        // Mostrar el array con números primos al principio
        System.out.println("\nArray con números primos al principio:");
        mostrarArray(numerosPrimos);
        mostrarArray(otrosNumeros);

        scanner.close();
    }

    // Función para verificar si un número es primo
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

    // Función para mostrar un array
    public static void mostrarArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println("pos[" + i + "] = " + array[i]);
        }
    }
}
