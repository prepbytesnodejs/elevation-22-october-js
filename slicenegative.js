//slice --->with negative indexes
let arr=[1,2,3,4,5];
//console.log(arr.slice(-1,-1))  // arr.length+index // 4
// arr.length+index
//console.log(arr.slice(4,4))

//console.log(arr.slice(-3,-2));
//console.log(arr.slice(2,3));

//
//let arr2=[ [1,2,3,4,5] ]
//console.log(arr2[0].slice(1,2))

// For negative indexes in slice just convert them into positive indexes by adding arr.length in them and you will get the required out put and easily visualize it


let arr2=[1,2,3,4,5];
//console.log(arr.splice(-1))  // 
//console.log(arr)  // original arryay gets modified 

//console.log(arr.splice(-3,-1))  // 
//console.log(arr.splice(2,3));


//splice wont work with second argument as negative because its not the index its the totalCount or the number of elements you want to delete ,so negative count is not allowed

let str="hello people";

console.log(str.split("").reverse().join(""))