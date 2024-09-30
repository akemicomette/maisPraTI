import entities.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int selection;
        PaymentMethods payment;
        System.out.println("Insira o valor do pagamento que deseja efetuar: ");
        double valueOfPayment = scanner.nextInt();


        do {
            System.out.println("\nEscolha a forma de pagamento: ");
            System.out.println("1. Cartão de crédito.");
            System.out.println("2. Boleto bancário.");
            System.out.println("3. Pix.");
            System.out.println("4. Sair.");

            selection = scanner.nextInt();
            scanner.nextLine();

            switch(selection) {
                case 1:
                    System.out.println("Digite o número do cartão: ");
                    String cardNumber = scanner.nextLine();
                    System.out.println("Digite o nome impresso no cartão: ");
                    String nameOnCard = scanner.nextLine();
                    System.out.println("Digite o código de segurança: ");
                    String securityCode = scanner.nextLine();
                    payment = new CreditCard(cardNumber, nameOnCard, securityCode);

                    payment.processPayment(200);
                    break;
                case 2:
                    payment = new PaymentSlip();
                    payment.processPayment(200);
                    break;
                case 3:
                    payment = new BankTransfer();
                    payment.processPayment(15);
                    break;
                case 4:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente");
            }
        } while (selection != 4);
    }
}
