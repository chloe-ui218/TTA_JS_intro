function product(id, name, price, quantity){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getTotalprice = function(){
        return this.price * this.quantity
    }
}


let product1 = new product(1, 'Apple', 5, 10);
let product2 = new product(2, 'Banana', 3, 5,);
let product3 = new product(3, 'Orange', 4, 8,);

let InvoiceTotal = product1.getTotalprice() + product2.getTotalprice() + product3.getTotalprice();

console.log("============================== Ecobaz Invoice ======================");
console.log("+------------------------------------------------------------------+");
console.log("ID \t Name \t Unit price \t Quantity \t Total price");
console.log("+------------------------------------------------------------------+");
console.log(" " + product.id + "\t" + product1.name + "\t\t" + product1.price + "\t\t" + product1.
    quantity + "\t\t" + product1.getTotalprice() + "USD \t\t |");
console.log("+------------------------------------------------------------------+");
console.log("|" + product2.id + "\t" + product2.name + "\t" + product2.price + " USD \t\t" + product2.
    quantity + "\t\t" + product2.getTotalprice() + " USD \t\t |");
console.log("+------------------------------------------------------------------+");
console.log("|" + product3.id + "\t" + product3.name + "\t" + product3.price + " USD \t\t" + product3.
    quantity + "\t\t" + product3.getTotalprice() + " USD \t\t |");
console.log("+------------------------------------------------------------------+");  
console.log("| \t \t \t \t \t \t" + "Total: " + InvoiceTotal + " USD\t |");
console.log("====================================================================");          