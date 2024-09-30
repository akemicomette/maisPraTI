package entities;
import java.util.Scanner;

public class CreditCard extends PaymentMethods {
    private String cardNumber;
    private String nameOnCard;
    private String securityCode;


    public CreditCard(String cardnumber, String nameOnCard, String securityCode) {
        this.cardNumber = cardnumber;
        this.nameOnCard = nameOnCard;
        this.securityCode = securityCode;
    }

    public void processPayment(double value) {
        if (validatePayment()) {
            System.out.println("Pagamento de R$ " + value + "feito com cartão de crédito com sucesso!");
        } else {
            System.out.println("Falha na validação para pagamento, por favor tente novamente.");
        }
    }

    public boolean validatePayment() {
        Scanner scanner = new Scanner(System.in);
        String input = "";
        String pattern = "\\d{3}";

        while(true) {
            input = scanner.next();

            if(input.matches(pattern)) {
                System.out.println("Código de segurança válido!");
                break;
            } else {
                System.out.println("Código inválido! Digite o código de 3 dígitos.");
            }
        }
        return !(cardNumber.isEmpty() && securityCode.isEmpty());
    }
}
