package entities;

public class BankTransfer extends PaymentMethods {

    public void processPayment(double value)  {
        if(validatePayment()) {
            System.out.println("Pagamento de R$ " + value + " feito por Pix.");
        } else {
            System.out.println("Falha ao validar o Pix.");
        }
    }

    public boolean validatePayment() {
        boolean isTransferValid = true;
        if(!isTransferValid) {
            throw new RuntimeException("Chave pix inválida.");
        }
        return isTransferValid;
    }
}
