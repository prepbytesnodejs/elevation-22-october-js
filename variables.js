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
var v=9;
console.log(v)
var v=89;
console.log(v);  //works
//let  bn=99;
//console.log(bn);
//let bn=89;
//console.log(bn); //gives an error 

//const cn=90;
//console.log(cn);
//const cn=98;
//console.log(cn);
// Conclusion -->var can be redeclared but let and const can't be redeclared 


