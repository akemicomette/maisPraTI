import entities.*;

public class Main {
    public static void main(String[] args) {
        IMeansTransport[] transports = {new Cars(), new Bikes(), new Train()};

        for(IMeansTransport transport : transports) {
            transport.accelerate();
            transport.brake();
            System.out.println();
        }
    }
}
