package entities;

public class PaymentSlip extends PaymentMethods {

    public void processPayment(double value)  {
        if(validatePayment()) {
            System.out.println("Pagamento de R$ " + value + "feito por boleto bancário");
        } else {
            System.out.println("Falha no processamento do pagamento do boleto bancário.");
        }
    }

    public boolean validatePayment()  {
        boolean isSlipValid = true;
        if(!isSlipValid) {
            throw new RuntimeException("Boleto inválido.");
        }
        return isSlipValid;
    }
}
