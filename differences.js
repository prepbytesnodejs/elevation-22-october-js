// Global scope 
// Functional scope
// Block Scope 
/*

// Global scope 
let c=9;
var k=8;   //var has a global scope  -->wrong it has a functional scope
const h=88;

function foo(){
  var n=9;

  console.log(c,k,h);
}

//console.log(n);

foo();

// Reason why variables declared with var sometimes are called as global variable because var gets attached to window object (or the global object of runtime ) but let and const donot 

// var and let differences
//1- var can be re declared ,but let cant in the same scope
 var ck=9;
  var ck=99;

console.log(ck);

//let bn=89;
//let bn=67;
//console.log(bn);

function foo2(){
  let k=90;
  if(true){

    let k=88;
    console.log(k);
  }
  
  
}

foo2();

*/


// 2 - var has a functional scope but let has a block scope
// {} -->block
// if you define the let inside this curly brackets accompanied with any if else or for or event function it cant be accesed outside the curly brackets

/*{
  let g=88;  // g has a block scope because of let
}

console.log(g);
*/
// var has functional scope
// function +{} ==functional scope
/*
function fo(){

  var y=99;
  
}
console.log(y);
*/

// If function is not there with curly brackets and anything else except function then var is accessible outside

/*
for(let i=0;i<9;i++){
var t=9;  
}

console.log(t);
*/


// 3 difference is var gets attached to the global objects but let cannot ,the global objects is window in browsers 
// every runtime has some global object
/*
var f=9;
let y=990;
console.log(window.f); // will print 9 in browsers
console.log(window.y); // will print undefined  in browsers
*/

// differences between var and const
//1- var has a functional scope and const has a block scope
// {}-->these curly brackets are block scope
// function +{)--->functional scope
{
    const c=9;
    var g=99;
    
  }
  
  //console.log(g);  // it prints because the curly brackets are not accompanies by the function keyword so its not limiting the g variable as variables declared with var have function scope so we can access them
  //console.log(c)  // it gives error because const has a block scope
  
  // similar thing goes for for loop ,if while ,switch else
  /*for(let i=0;i<10;i++){
    let c1=9;
    var g1=8;
    
  }
  
  console.log(g1)  // works because no functional scope
  
  console.log(c1)  // works because it only looks for block scope which is the curly brackets
  */
  
  //2 - var can be redeclared and can be re assigned but const cannot be redeclared or re assigned
  
  //var k=9;  // works
  //var k=88;//works
  //k=78;//works
  
  //const h=9;
  //const h=67  // doesnt works
  //h=99; // doenst works
  
  
  // 3- variables declared with var are attached to global object 
  //but variables declared with let and const cant be attached to window object of browser
  /*
  var f9=0;
  const yu=99;
  console.log(window.f9) ;// prints 0
  console.log(window.yu);;//m prints undefined 
  */


  // difference between let and const 
// let can be reassigned but const cannot be re assigned
let c=9;
c=99; // valid

const h=99;
h=90; // invalid



function foo(){
    console.log(h);
  
  let h=9;
  }
  
  //foo();
  
  function foo2(){
    console.log(h2);
  
  const  h2=9;
  }
  
  foo2();