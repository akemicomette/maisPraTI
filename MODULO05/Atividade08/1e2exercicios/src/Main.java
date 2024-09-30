import entities.Product;
import entities.ProductDiscount;

public class Main {
    public static void main(String[] args){
        System.out.println("Loja Teste Java");

        try {
            Product product = new Product("Scarpin", 389.99 , 20);
            product.showStock();
            System.out.print("");

            product.setPrice(-100.00);
        } catch (IllegalArgumentException e){
            System.out.println("Erro: " + e.getMessage());
            System.out.println(" ");
        }

        try {
            Product product1 = new Product("Sapatilha", 250.00 , 10);
            product1.showStock();
            System.out.print("");

            product1.setQuantity(-20);
        } catch (IllegalArgumentException e){
            System.out.println("Erro: " + e.getMessage());
        }

        try {
            ProductDiscount discountedProduct = new ProductDiscount("Tênis", 300.00, 15);
            discountedProduct.showStock();
            System.out.println(" ");

            discountedProduct.applyDiscount(20);
            System.out.println("Após o desconto: ");
            discountedProduct.showStock();

            discountedProduct.applyDiscount((50.5));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
