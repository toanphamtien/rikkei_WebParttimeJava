import java.util.Scanner;

public class exCurrencyConversion {
    public static void main(String[] args) {
        float rate = 23000;
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Nhap USD: ");
            float usd = scanner.nextFloat();
            System.out.printf("$%.2f = %.2f vnd", usd, usd*rate);
        }
    }
}