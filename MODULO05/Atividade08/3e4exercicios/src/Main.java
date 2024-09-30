import entities.*;

public class Main {

    public static void main(String[] args) {
        Manager manager = new Manager("Alessandra", 6000);
        Developer developer1 = new Developer("Fernanda", 6500);

        manager.isWorking();
        System.out.println("Bônus semestral da(o) gerente " + manager.calculateBonus());
        System.out.println(" ");
        developer1.isWorking();
        System.out.println("Bônus anual por produtividade " + developer1.calculateBonus());

    }
}
