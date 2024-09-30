package entities;

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("O gatinho faz:");
        System.out.println("'Miau miau miau'.");
    }
}
