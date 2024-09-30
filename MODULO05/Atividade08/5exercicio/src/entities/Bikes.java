package entities;

public class Bikes implements IMeansTransport {
    @Override
    public void accelerate() {
        System.out.println("A bicicleta está mais rápida.");
    }

    @Override
    public void brake() {
        System.out.println("O ciclista está freando.");
    }
}
