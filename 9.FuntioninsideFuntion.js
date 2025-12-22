//function inside the another fuction
//example 1
console.log("Start");// o/p start
const x="hello";//UD => x= hello
var y=666;//ud => y=666
console.log(x);//o/p hello
function fun1(){//function declaration 1
    console.log(y);//o/p 666
    console.log(this.y);// UD
    let z;// z=UD
    y="333";
    console.log(a);//o/p UD
    var a=100;
    z=555;//ud=> z=555
    const b="Welcome";
    function fun2(){//function declaration 2
        console.log(z);//o/p 555
        var y="bye";//UD => y="bye"
        console.log(this.y); //U.D
        console.log(y);//o/p bye
    }
    fun2();//function call 2

}
fun1();//function call 1
console.log("end");// o/p end


//example 2
// console.log("start"); //start
// let Cname="WEB";
// var ID="VDWE3";
// console.log(ID);// VSWE3
// function task1(){
//     const place ="vadapalani";
//     Cname="WEBTECH"
//     console.log(this.ID);//UD
//     console.log(place);// vadapalani
//     var sub1="HTML"; 
//     function task2(){
//         console.log(place);//vadapalani
//         console.log(days);// UD
//         var days=40;
//         let sub2="Css";
//         console.log(sub2);//Css
//         function task3(){
//             console.log(sub1);//UD
//             const sub3="java Script";
//             console.log(sub3); //java script
//             sub2="react js "
//             sub1="node js "
//         }        
//         task3()
//         console.log(`This is task3 log 1 ${sub2}`);//react js
//     }
//     task2()
//     console.log(`THis is task2 log1 ${sub1}`); //node js
//     console.log(`This is task2 log2 ${Cname}`);//WEB
// }
// task1()
// console.log("end");
