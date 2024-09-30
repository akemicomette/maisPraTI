package entities;

public class Developer extends Employees {
    public Developer(String name, double wage) {
        super(name, wage);
    }

    public double calculateBonus() {
        return this.wage * 0.10;
    }

    @Override
    public void isWorking(){
        System.out.println("O(a) desenvolvedor(a) " + name + " está desenvolvendo as tasks diárias.");
    }
}
