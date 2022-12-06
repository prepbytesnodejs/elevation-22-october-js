// slice 
// it cuts your array from the beginning till the end index ,end index not inclusive

let arr=[99,100,101,102,103,104];
console.log(arr.slice(1,4))
console.log(arr);


// splice cuts your array from the first argument  to the second argument with second argument inclusive ,and it modifies the original array 
let arr2=[99,100,101,102,103,104];
console.log(arr2.splice(1,4))
console.log(arr2);



// negative indexes 

//let arr=[1,2,3,4,5];
//console.log(arr.slice(-1,-2));


// slice 
// it cuts your array from the beginning till the end index ,end index not inclusive
/*
let arr=[99,100,101,102,103,104];
console.log(arr.slice(1,4))
console.log(arr);


// splice cuts your array from the first argument  to the second argument with second argument inclusive ,and it modifies the original array 
let arr2=[99,100,101,102,103,104];
console.log(arr2.splice(1,4))
console.log(arr2);
*/



// Array sort ---> sort ()
/*
let strArr=["q","b","e","f","g"];

let ret=strArr.sort(function(a,b){
  console.log(a.localeCompare(b))

  

  // string comparison 
return a.localeCompare(b)

  
  
})

console.log(ret);
*/


/*
let a="a";
let b="b";
console.log(a.localeCompare(b))  // so if b comes after a it returns -1
*/

let a="b";
let b="a";

console.log(b.localeCompare(a))  // so if b comes before a it returns 1