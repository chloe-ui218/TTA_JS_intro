class product {
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo(){
        console.log(`\n\ t Name: ${this.name} \n\t price: ${this.price} \n\t category: ${this.category}`);
    }

    applyDiscount(discountRate){
        let discount = (this.price * discountRate) / 100;
        this.price -= discount;
        console.log(`\n\t New price after ${discountRate}% discount: ${this.price}`); 
    }
}

let product1 = new product('T-shirt', 10000, 'clothing');
let product2 = new product('Short', 500, 'Clothing');    

product1.getInfo();
product1.applyDiscount(10);
product2.getInfo();
product2.applyDiscount(20);

class Electronics extends product {
    constructor(name, price, brand, warranty){
        super(name,price, 'Electronics');
        this.brand = brand;
        this.warranty = warranty;
    }

    getElectronicInfo(){
            console.log(`\t brand: ${this.brand} \n\t warranty: ${this.warranty}`);
    }

}
let product3 = new Electronics('laptop', 50000, 'Dell', '1 year');
let product4 = new Electronics('Mobile', 20000, 'Samsung', '2 year');

product3.getInfo();
product3.getElectronicInfo();
product3.applyDiscount(10);
product4.getInfo();
product4.getElectronicInfo();
product4.applyDiscount(20);