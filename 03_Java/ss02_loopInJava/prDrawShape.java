import java.util.Scanner;

public class prDrawShape {
    public static void main(String[] args) {
        int choice = 0;
        Scanner scanner = new Scanner(System.in);
        do {
            System.out.println("-----Menu-----");
            System.out.println("1. Draw the triangle");
            System.out.println("2. Draw the Square");
            System.out.println("3. Draw the Rectangle");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            switch (choice) {
                case 0:
                    scanner.close();
                    System.exit(0);
                case 1:
                    System.out.println();
                    System.out.println("* * * * *");
                    System.out.println("  * * *  ");
                    System.out.println("    *    ");
                    System.out.println();
                    break;
                case 2:
                    System.out.println();
                    System.out.println("* * *");
                    System.out.println("* * *");
                    System.out.println("* * *");
                    System.out.println();
                    break;
                case 3:
                    System.out.println();
                    System.out.println("* * * * *");
                    System.out.println("* * * * *");
                    System.out.println("* * * * *");
                    System.out.println();
                    break;
                default:
                    System.out.println("no choice");
                    break;
            }
        } while (choice != 0);
    }
}