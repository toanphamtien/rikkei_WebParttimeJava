import java.util.Scanner;

public class exHello {
    public static void main(String[] args) {
        System.out.println("Enter your name: ");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        System.out.println("Hello " + name);
        scanner.close();

        // try (Scanner scanner = new Scanner(System.in)) {
        //     Scanner scanner = new Scanner(System.in);
        //     String name = scanner.nextLine();
        //     System.out.println("Hello " + name);
        // } catch (Exception e) {
        //     System.out.println(e);
        // }
    }
}
