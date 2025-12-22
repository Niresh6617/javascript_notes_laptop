//scope execution :where to where you can acess
// scope means it tells the variable where to access them 
// 3 - Types of Scope
// 1. Function Scope (let)
// 2. Block Scope (let , const)
// 3. Global Scope(Var)

//1.Global scope - simply var is using out side the scope see the var x ="999"
//2. Block Scope (let, const avoid var) it excute automatically inside braces {....}
//3. Function Scope (let , const avoid var) it execute inside the scope when the function calls 
console.log("start");
var x="999";
console.log(x);
let n;
let y="HTML";
const z="hello";
function fun1(){
    n="react"
    console.log(x);
    console.log(z);
    var x="bye";
    console.log(this.n);
}
fun1();
console.log(x);
console.log(n);
console.log("end");


// exercise
// console.log(x); //undefined
// var x=10;
// let y=15;
// const z=20;
// function fun1(){
//     console.log(x); //UD
//     console.log(y); //15
//     console.log(z); //20 
//     var x="Niresh"
// }
// fun1();