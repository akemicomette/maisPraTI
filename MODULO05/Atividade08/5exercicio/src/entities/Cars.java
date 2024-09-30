package entities;

public class Cars implements IMeansTransport {
    @Override
    public void accelerate() {
        System.out.println("O carro está acelerando.");
    }

    @Override
    public void brake() {
        System.out.println("O carro está freando.");
    }
}
