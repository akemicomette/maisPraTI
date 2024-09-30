package entities;

public class Manager extends Employees{
    public Manager(String name, double wage) {
        super(name, wage);
    }

    public double calculateBonus() {
        return this.wage * 0.20;
    }

    @Override
    public void isWorking(){
        System.out.println("A(o) gerente " + name + " está criando estratégias para mudar o mercado!");
    }
}
