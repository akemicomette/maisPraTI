package entities;

public abstract class PaymentMethods {
    public abstract void processPayment(double value);
    public abstract boolean validatePayment() throws Exception;
}
