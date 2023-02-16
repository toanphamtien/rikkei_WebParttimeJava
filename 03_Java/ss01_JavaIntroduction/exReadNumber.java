import java.util.Scanner;

public class exReadNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = -1;

        while (true) {
            System.out.print("Enter a number less than 1000: ");
            number = scanner.nextInt();

            if ((number > 999) || (number < 0)){
                System.out.println("ability");
                break;
            }
            
            String result = "";

            if (number == 0) {
                result = "zero";
            } else {
                // đọc hàng trăm
                if (number / 100 > 0) {
                    result += convertDigitToWord(number / 100) + " hundred ";
                    number %= 100;
                }

                // đọc hàng chục và hàng đơn vị
                if (number > 0) {
                    if (number < 10) {
                        result += convertDigitToWord(number);
                    } else if (number < 20) {
                        result += convertTeensToWord(number);
                    } else {
                        result += convertTensToWord(number / 10);
                        if (number % 10 > 0) {
                            result += " " + convertDigitToWord(number % 10);
                        }
                    }
                }
            }

            System.out.println(result);
        }

        scanner.close();
    }

    // chuyển đổi số hàng đơn vị thành chữ
    public static String convertDigitToWord(int digit) {
        switch (digit) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            default:
                return "";
        }
    }

    // chuyển đổi số hàng chục thành chữ
    public static String convertTensToWord(int tens) {
        switch (tens) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
            default:
                return "";
        }
    }

    // chuyển đổi số từ 10 đến 19 thành chữ
    public static String convertTeensToWord(int number) {
        switch (number) {
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
            default:
                return "";
        }
    }
}
