package entities;

public class Product {
    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        setPrice(price);
        setQuantity(quantity);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if(price < 0) {
            throw new IllegalArgumentException("O preço não pode ser negativo.");
        }

        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        if(quantity < 0) {
            throw new IllegalArgumentException("A quantidade no estoque não pode ser negativa.");
        }
        this.quantity = quantity;
    }

    public void showStock() {
        System.out.println("Produto: " + name + ".");
        System.out.println("Preço R$: " + price);
        System.out.println("Quantidade disponível em estoque: " + quantity + " unidades.");
    }
}
