package entities;

public class Employees {
    protected String name;
    protected double wage;

    public Employees(String name, double wage) {
        this.name = name;
        if(wage < 0) {
            throw new IllegalArgumentException("O valor do salário não pode ser negativo.");
        }
        this.wage = wage;
    }

    public double calculateBonus() {
        return 0;
    }

    public void isWorking(){
        System.out.println(name + "está trabalhando.");
    }
}
