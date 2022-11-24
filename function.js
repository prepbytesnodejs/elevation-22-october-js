// function definition
"use strict";

var k=9;
///

//return sum;
// functions packages your logic and code separately -->such that you can selectively execute them

function foo (){
    // you put upall your code that you want to execute

    var firstNum=1;
var secondNum=2;
var sum =firstNum+secondNum;


return sum;
   
}
// function call
//console.log(foo());


// with help of function 

function product(){
    var p1=8;
var p2=9;
var productvalue=p1*p2;


}
//product()

// next benefit is using reusability\


function productofAll(q1,q2){ //parameteres
  //  var q1=9;
//var q2=89;
var pro=q1*q2;
console.log(pro);


}
//productofAll(2,3);  // arguments
//productofAll(8,9);
//productofAll(7,8)



// Write a function that calculates the sum of 2 numbers

function sumofTwoNumbers(a,b){
   

    var  sum=a+b;
    return sum;

}
//var output=sumofTwoNumbers(3,4);
//console.log(output);
//console.log(sumofTwoNumbers(3,4));

// product of two numbers

function productofTwoNumbers(a,b){
   

    var  product=a*b;
    return product;

}
// divison of two numbers

function divisionofTwoNumbers(a,b){
   

    var  division=a/b;
    return division;

}
// modulo of two numbers
function modulofTwoNumbers(a,b){
   

    var  modulo=a%b;
    return modulo;

}