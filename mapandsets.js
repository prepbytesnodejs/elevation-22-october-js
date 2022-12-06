//Map and sets -->they are datastructures /user defined data types
//let obj={name:"key"} ; //(Object literals in JS ) equivalent to traditoional Hashmap ,

let obj={name:"shubham"};
obj["age"]=20  // for setting up a key and value
obj["age"];  // for getting up a key 
//so you can have only string keys 
// you can have value of any type


//let j={"[1,2,3]":"data"}

//console.log(j);

const mp=new Map();
//mp.set("name","shubham");

//console.log(mp.get("name"));
let arr=[1,2,3,4]
mp.set(arr,"Array")
//console.log(mp);
console.log(mp.get([1,2,3,4]))


// Set datastructure

// Set
// its kind of like an array but it only contains unique values 

const set=new Set();

set.add(9);  // to add a value to the set 
console.log(set);  // printing out complete set 

// to get the value from set 

console.log(set.has(90)) ;// it check whether a particular value exists or not in a set

// if you want to remove duplicates from an array you can use set


const arr=[1,2,2,4,44,4,4,4,3,1,2,9,9];
// convert an array to set
const setNew=new Set(arr);
//console.log(setNew)
// convert a set to an array 
let uniqueArray=[...setNew];  // spread operator spread the value ,and you can store it in different container or structure
let new2=[...uniqueArray]
console.log(  new2)

