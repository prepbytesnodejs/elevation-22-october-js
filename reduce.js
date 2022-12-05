// reduce   --->it converts your array into a single value
// that single value van be an object 
// can be an array
// can be a number 
// can be a string 

let arr=[1,2,3,4,5,5,6,6,7];

//let sum=0;  // sum is acting like a basket which is collecting all the items and summing
let sum=arr.reduce(function(acc,ele){

  acc=acc+ele;

  return acc;
  
},0)


let strArr=["a","b","c","d","e","f"];

let stringCombined=strArr.reduce(function(acc,ele){

    acc=acc+ele;
  
    return acc;
    
  },"")

  console.log(stringCombined)