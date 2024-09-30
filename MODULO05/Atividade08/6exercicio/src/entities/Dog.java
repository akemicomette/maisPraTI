package entities;

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("O cachorro faz:");
        System.out.println("'Au au au'.");
    }
}
