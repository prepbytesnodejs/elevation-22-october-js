//Array map function --->
/*
function foo(a,b){

  let sum=a+b;
  return sum;

  
}
*/

//foo(2,3);
/*
function bar(fn){
  fn(); // it will indriectly call the cb function
  
}

// you are calling bar function
bar( function cb (){
  
}      )
*/

// map function 

// map function is used to change or modify the values of an orignal array

let arr=[1,2,3,4,5,6];

let ret=arr.map(function cb(data){
  //console.log(data);
  // multiply all values by 2 ;

  return data*2;
  
})

//console.log(ret);  // i will get an array that will contain all the values that are twice the values of original array ie arr


function twiCeArr(arr){
let arr2twice=[];  // an empty array

  for (let i=0;i<arr.length;i++){
    arr2twice.push(2*arr[i])  // push inserts an element at the end of array
    
    
  }
  
  return arr2twice
}
console.log(twiCeArr(arr))


// given an array  [2,3,44,55,78] ,print the array which has the cubes of all the value in original array using forEach ,using map and using traditional for loop
// [8,27,----] 

// given an array of string ----> ["a","b","c","d","e"];
//OUTPUT---> ["A","B","C","D","E"] ;  USE map forEach and traditional for loop

let originalArr=[1,2,3,4,4,5,6];

let cubed=originalArr.map(function(data){
  return data*data*data;
  
  
})

//console.log(cubed);


let arr=[2,3,44,55,78];
let arr2=[];
let ret=arr.forEach(function (d){
   // arr2.push(arr*arr*arr);
  return d*d*d
  
})
console.log(ret);


let str= ["a","b","c","d","e"];

let retStr=str.map(function(data){

  return data.toUpperCase();  // inbuilt method for string
  
})

console.log(retStr)

// With Arrow functions ------------------

let arr=[1,2,3,4,5];
console.log(

  arr.map((d)=>{
    return d*2  // if you are using curly brackets use return statement
  })




  
)
console.log(

  arr.map((d)=>d*2)  // if not using curly brackets ,then whatever is on the right side gets returned automatically
)

console.log(

  arr.map(d=>d*2)  // if you want to use one argument then you can omit the round bracket arount d as well
)

/*
console.log(arr.map(function(d){
  return d*2;

  
}))
*/

// for each is just an alternative to for loop for array iteration
/*
console.log(arr.forEach(function(d){
  return d*2;

  
})
            )
*/