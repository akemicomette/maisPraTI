package entities;

public class Developer extends Employee {
    public Developer(String name, double baseSalary) {
        super(name, baseSalary);
    }

    public double calculateSalary() {
        return getBaseSalary()*1.1;
    }

    public double calculateBonus() {
        return getBaseSalary()*0.10;
    }

    public void promote() {
        System.out.println(getName() + "o(a) desenvolvedor(a) foi promovido(a) para dev pleno(a)!");
        setBaseSalary(getBaseSalary()*2);
    }
}
