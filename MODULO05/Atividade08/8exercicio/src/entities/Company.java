package entities;
import java.util.ArrayList;
import java.util.List;

public class Company {
    private List<Employee> employeesList = new ArrayList<>();

    public void addEmployee(Employee employee) {
        employeesList.add(employee);
    }

    public void promoteEmployee(Employee employee) {
        if(employee instanceof Intern) {
            System.out.println("Promovendo " + employee.getName() + " para Desenvolvedor(a)");
            double newSalary = employee.getBaseSalary()*1.2;

            employeesList.remove(employee);
            employeesList.add(new Developer(employee.getName(), newSalary));
        } else if(employee instanceof Promotable) {
            ((Promotable) employee).promote();
        }else {
            System.out.println("Não é possível promover este funcionário, por favor fale com seu gestor.");
        }
    }

    public double calculatePayroll() {
        double total = 0;
        for(Employee e : employeesList) {
            total += e.calculateSalary() + e.calculateBonus();
        }
        return total;
    }

    public void listOfEmployees() {
            System.out.println("Lista de funcionários atual é: ");
        for(Employee e : employeesList) {
            System.out.println("Nome: " + e.getName() + " - Salário R$ " + e.calculateSalary() + " - Bônus R$ " + e.calculateBonus() + " .");
        }
    }
}
