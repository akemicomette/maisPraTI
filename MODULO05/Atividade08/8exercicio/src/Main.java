import entities.*;

public class Main {
    public static void main(String[] args) {
        Company company = new Company();

        Employee manager = new Manager("Alessandra", 8000);
        Employee developer = new Developer("Fernanda", 4000);
        Employee intern = new Intern("João", 1500);

        company.addEmployee(manager);
        company.addEmployee(developer);
        company.addEmployee(intern);

        System.out.println("Folha de pagamento total: " + company.calculatePayroll());

        company.listOfEmployees();

        System.out.println("\nPromovendo o desenvolvedor: ");
        company.promoteEmployee(intern);

        System.out.println("Folha de pagamento após promoções");
        company.listOfEmployees();

        System.out.println("\nFolha de pagamento atualizada: " + company.calculatePayroll());

    }
}
