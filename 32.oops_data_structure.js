// Inheretence 
// class - is a template to create an object 
// extends - it inherits the properties of child to parent class
// super - it calls the parent class constructor or methods 

// class Vehicle {
//     constructor(name , brand ){
//         this.name = name;
//         this.brand = brand;
//     }
//     start(){
//         console.log(`The car ${this.name} is starting`);
//     }
// }
// class Car extends Vehicle{
//     constructor(name , brand , color){
//         super(name , brand);
//         this.color = color;
//     }
//     displayInfo(){
//         console.log(`the name of the is: ${this.name} \n the brand is: ${this.brand} \n the color is:  ${this.color}`);
//     }
// }

// let car1 = new Car("Hundai", "i20" , "red")
// car1.start();
// car1.displayInfo();

// class Parent{
//     constructor(name , family_name){
//         this.name = name;
//         this.family_name = family_name;
//     }
//     parent_display(){
//         console.log(`${this.name},${this.family_name}`);
//     }
// }
// let parent1 = new Parent("suresh", "suresh_family")
// class child extends Parent{
//     constructor(name , parent_display){
//         super(parent_display)
//         this.name = name;
//     }
//     display(){
//         console.log(`${this.parent_display} , ${this.name}`);
        
//     }

// }
// let child1 = new child("Niresh")
// child1.display()

//polymorphism
// class Shape{
//     calculateArea(){
//         console.log("Area Calculate for shape");
//     }
// }
// class Circle extends Shape{
//     calculateArea(r){
//         let formula = Math.PI * r * r;
//         console.log(formula);
//     }
// }
// class Reactangle extends Shape{
//     calculateArea(length , width){
//         let formula = length * width;
//         console.log(formula);
//     }
// }

// let area0 = new Shape()
// area0.calculateArea()
// let area = new Reactangle()
// area.calculateArea(10 , 2)

// let area1 = new Circle()
// area1.calculateArea(2) 

// Abstract - showng onely necessary features and hiding unnesesarry implementation 
// class PaymentGateway{
//     makePayment(){
//         throw console.error("there is an errror so you have to implement with child classes");
//     }
// }
// class CreditCardpayment extends PaymentGateway{
//     makePayment(){
//         console.log("Payment done using credit card 💳");
//     }
// }
// class UPIPayment extends PaymentGateway{
//     makePayment(){
//         console.log("Payment done using UPI 💰");
//     }
// }


// let creditCard = new CreditCardpayment()
// let upi = new UPIPayment()
// creditCard.makePayment()
// upi.makePayment()

// Stack - LIFO (Last In First Out )
class stack {
    constructor(){
        this.item = [] //initialize with an empty array
    }
    push(number){
        this.item.push(number)
    }
    pop(){
        if(this.item.length === 0){
            console.log("The stack is empty");
        }
        else{
            return this.item.pop()
        }
        console.log(`the poped item is ${this.item.pop()}`);
    }
    peek(){
        // itis a mehtod is used to view the top value without dlete an element 
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length===0
    }
}
let stacka = new stack()
stacka.push(10)
stacka.push(20)
stacka.push(30)
console.log(stacka);
console.log(stacka.peek());
