package entities;

public class Cow extends Animal {
    @Override
    public void makeSound() {
        System.out.println("A vaquinha faz:");
        System.out.println("'Muuu muuu muuu'.");
    }
}
