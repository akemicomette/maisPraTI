package entities;

public class Intern extends Employee {
    public Intern(String name, double baseSalary) {
        super(name, baseSalary);
    }

    public double calculateSalary() {
        return getBaseSalary();
    }

    public double calculateBonus() {
        return getBaseSalary() * 0.1;
    }

    public void promote() {
        System.out.println(getName() + " foi efetivada(o)!");
    }
}
