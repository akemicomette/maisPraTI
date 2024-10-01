package entities;

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
            System.out.println("Pagamento de R$ " + value + " feito com cartão de crédito com sucesso!");
        } else {
            System.out.println("Falha na validação para pagamento, por favor tente novamente.");
        }
    }

    public boolean validatePayment() {
        return (securityCode.matches("\\d{3}") && !cardNumber.isEmpty());
    }
}
