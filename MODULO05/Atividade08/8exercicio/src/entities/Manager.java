package entities;

public class Manager extends Employee {
    public Manager(String name, double baseSalary) {
        super(name, baseSalary);
    }

    public double calculateSalary() {
        return getBaseSalary()*1.3;
    }

    public double calculateBonus() {
        return getBaseSalary() * 0.8;
    }

    public void promote() {
        System.out.println(getName() + "A(o) gerente foi promovido!");
        setBaseSalary(getBaseSalary()*2.8);
    }
}
