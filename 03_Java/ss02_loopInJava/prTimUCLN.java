import java.util.Scanner;

public class prTimUCLN {
    public static void main(String[] args) {
        int a = 0;
        int b = 0;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhap a: ");
        a = scanner.nextInt();
        System.out.print("Nhap b: ");
        b = scanner.nextInt();
        scanner.close();

        a = Math.abs(a);
        b = Math.abs(b);

        if (a == 0 || b == 0){
            System.out.println("Khong co UCLN");
            return;
        }
        while( a != b){
            if (a>b) a -= b;
            else b -=a;
        }
        System.out.println("UCLN = " + a);
        return;
    }
}
