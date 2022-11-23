var age=20;  // variable creation with var keyword
let name="shubham";
const value=true;


// different data types in js --
//primitive data types -->basic datatypes or elementary  datatypes that any language offers

// number ,string ,boolean ,undefined ,null ,symbol,bigint 

// Non primitive -->User defined 
// Object literals  ,arrays ,Map ,Set ,WeakMap
// Arrays -- 
let ageArray=[1,2,3,4,5,6]; // Array -- >is a collection of data (data can be or primitive type only or it can be combination of primitive and non primitive)

// Object literal   // 
let shubham={firstName:"Shubham",age:22,address:"Delhi"}



// Difference between var ,let and const --->
//console.log("hey people wassup???");  // use to output something in browser console
//alert("hello people")
//document.write("hello there")

// how a variable is created 

// It goes to three different phases -- var jj=9
// Declaration phase --->acquiring the memory space --->just like acquiring the piece of land (var jj)
// Initialization phase -->putting undefined value to the memory space -->just like fencing the acquired land (jj=undefined)
// Assignment phase ---> giving the real value -->just like creating a 2 bhk or 3 bhk in the land (jj=9)

// difference between let and var and const

// you can't redeclare let and const 
//var v=9;
//console.log(v)
//var v=89;
//console.log(v);  //works
//let  bn=99;
//console.log(bn);
//let bn=89;
//console.log(bn); //gives an error 

//const cn=90;
//console.log(cn);
//const cn=98;
//console.log(cn);
// Conclusion -->var can be redeclared but let and const can't be redeclared 

// undefined is a primitive data type which is used as a default value of the variables 

//var c;
//let h;
//console.log(c);
//console.log(h);


// Next difference Attachment to the window object -- Variables
// variables declared with var get attached to the window object but variables declared with let and const dont

//var vb=99000;
//let hb=90;
//const gh=99;
//console.log(window.vb);// window is a global variable present in every browser
//console.log(window.hb);
//console.log(window.gh);

// --->scopes --->

/*

// . ---Operators ----->
// Arithmetic operators 
// +
var a1=89;
var a2=90;
var sum=a1+a2;
console.log(sum);

let s1="hello";
let s2="world";
let stringsum=s1+s2; //concatanates the string or joins them
console.log(stringsum) //string output

// -

var difference=a2-a1;
var stringdiffernce=s1-s2;
var stringSum=a1+s1;
console.log(stringSum);


//console.log("String",stringdiffernce)
console.log(difference)

// * 
let multiplication=a1*a2;
console.log(multiplication)

// / (division) ;
let divide=a1/a2;
console.log(divide);
*/
// % modulo -->it returns the remainder

let gh=78;
let vb=2;
let q=gh/vb;
let modulo=gh%vb;
let smallerBybigger=vb%gh;
console.log(smallerBybigger)
//console.log(modulo);
//console.log("quotient",q)

// = Assignment 
let hjjkk=9; // assignment 
let bn=9;
//bn=90; // assignment
bn=90;
console.log(hjjkk == bn ) // equality operator gives you the result in boolean

// == equalit -- === (strict equality); which checks for the type as well -->

