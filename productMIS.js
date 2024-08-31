class product {
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo(){
        console.log('\n\ t Name: ${this.name} \n\t price: ${this.price} \n\t category: ${this.category}');
    }
}

let product1 = new product('Laptop', 50000, 'Electronics');
let product2 = new product('Short', 500, 'Clothing');    

product1.getInfo();