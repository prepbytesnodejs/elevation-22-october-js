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

function all(a,b){
    var  modulo=a%b;
    var  division=a/b;
    var  product=a*b;
    var  sum=a+b;



return [modulo,division,product,sum]
}

//console.log(all(23,8))


// conditionals -->
function foo(num){

    if (num==2 ){
        console.log("yea the number is 2")

    }else{
        console.log("no its not 2")
    }




}
//foo(20);

// fizzbuzz problem ---> . % operator 

// 4%2 . -->0

// you have to write a function that accepts a number 
// if the number you passed is divisble by 3 you have to print fizzz
// if the number is divisible by 5 you have to rpint buzz
// if the number is divisible by both 3 and 5 you have to print fizz buzz 

// && 




function fizBuzz(num){

    if(num%3==0)
    {
        console.log("fizz")
    }
    if(num%5==0)
    {
        console.log("buzz")
    }
    if(num%3==0 && num%5==0)
    {
        console.log("fizz buzz")
    }
    



}

function fizBuzz2(num){

   if(num%3==0 && num%5==0)
    {
        console.log("fizz buzz")
    }

    else if(num%3==0)
    {
        console.log("fizz")
    }
    else if(num%5==0)
    {
        console.log("buzz")
    }else{
        console.log("no divisor found")

    }
 
    ///---



}

//fizBuzz(9);
//fizBuzz(10);
fizBuzz2(15);
fizBuzz2(25);
fizBuzz2(9);
fizBuzz2(19);


