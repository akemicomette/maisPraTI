package entities;

public class ProductDiscount extends Product{
    public ProductDiscount(String name, double price, int quantity) {
        super(name, price, quantity);
    }

    public void applyDiscount(double percentage){
        if(percentage <= 0 || percentage >= 50){
            throw new IllegalArgumentException("O desconto não pode ser negativo ou maior que 50%.");
        }
        double newPrice = getPrice() -getPrice() * (percentage/100);
        setPrice(newPrice);
    }
}
