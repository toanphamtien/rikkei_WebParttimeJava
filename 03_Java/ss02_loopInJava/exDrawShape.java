import java.util.Scanner;

public class exDrawShape {
    private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        int choice = 0;
        do {
            System.out.println("-----Menu-----");
            System.out.println("1. Draw the Rectangle");
            System.out.println("2. Draw the Square Triangle");
            System.out.println("3. Draw the Isosceles Triangle");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch(choice){
                case 1:
                    drawRectangle();
                    break;
                case 2:
                    drawSquareTriangle();
                    break;
                case 3:
                    drawIsoscelesTriangle();
                    break;
                case 0:
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("No choice");
                    break;
            }
        } while (choice != 0);
    }

    private static void drawRectangle(){
        int width = 0;
        int height = 0;
        System.out.print("width = ");
        width = scanner.nextInt();
        System.out.print("Height = ");
        height = scanner.nextInt();

        if(width <= 0 || height <= 0){
            System.out.println("failed");
            return;
        }

        for(int hi = 0; hi < height; hi++){
            for (int wi = 0; wi < width; wi++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    private static void drawSquareTriangle(){
        int length = 0;
        int corner = 0;
        System.out.print("Length = ");
        length = scanner.nextInt();
        if (length <= 0) {
            System.out.println("failed");
            return;
        }

        System.out.println("Triangle Corner: 1:top-left, 2:top-right, 3:bottom-left, 4:bottom-right");
        System.out.print("input Triangle Corner: ");
        corner = scanner.nextInt();

        switch(corner){
            case 1:
                for(int i = 0; i < length; i++){
                    for(int j = i; j < length; j++){
                        System.out.print("* ");
                    }
                    System.out.println();
                }
                break;
            case 2:
                for(int i = 0; i < length; i++){
                    for(int j = 0; j < length; j++){
                        if (j < i) System.out.print("  ");
                        else System.out.print("* ");
                    }
                    System.out.println();
                }
                break;
            case 3:
                for(int i = 1; i <= length; i++){
                    for(int j = 0; j < i; j++){
                        System.out.print("* ");
                    }
                    System.out.println();
                }
                break;
            case 4:
                for(int i = 1; i <= length; i++){
                    for(int j = 0; j < length; j++){
                        if (j < length - i) System.out.print("  ");
                        else System.out.print("* ");
                    }
                    System.out.println();
                }
                break;
            default:
                System.out.println("failed");
                break;
        }
    }

    private static void drawIsoscelesTriangle(){
        int length = 0;
        System.out.print("Length = ");
        length = scanner.nextInt();
        if (length <= 0) {
            System.out.println("failed");
            return;
        }

        for (int i = length; i > 0; i--){
            for (int j = 1; j < i; j++){
                System.out.print(" ");
            }
            for (int k = 1; k <= length - i + 1; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
