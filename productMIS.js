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

let product1 = new product('Laptop', 50000, 'Electronics');
let product2 = new product('Short', 500, 'Clothing');    

product1.getInfo();
product1.applyDiscount(10);
product2.getInfo();
product2.applyDiscount(20);