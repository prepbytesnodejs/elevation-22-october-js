// Reverse a string

let str="heloo world";
let rev="";

// we are traversing the string reversly
for(let i=str.length-1;i>=0;i--){

  rev=rev+str[i];
  
}

//console.log(rev);

// str.charAt(i); // which gives the caharacter at ith position in a string ---->

let str2="heloo world";
let rev2="";

// we are traversing the string reversly
for(let i=str.length-1;i>=0;i--){

  rev2=rev2+str2.charAt(i);
  
}

//console.log(rev2);

//toLowerCase -->it converts a string into all lower case

let st5="ROHAN";
let st6="javascript"

//console.log(st5.toLowerCase());


// toUpperCase ,it converts a string into all uppercase

//console.log(st6.toUpperCase());

// startsWith-->this method checks if the string starts with paricular string

//console.log(st5.startsWith("R"))
// includes checks whether the string contains the particular string or not
//console.log(st5.includes("HA"))

// includes work for arrays as well -->if you want to check whether the value exists in an array you can use this
// only works for primitive values not for reference types

// interview Question can be ------>
let r=[1,2,3]
let stA=[1,2,3,4,"shubham",r];
console.log(stA.includes(r));


// split -->how to convert a string into an array ,depeneding on the deleimter
let strw="j,k,l,m,n,o";
let strAr=str.split(",");
//console.log(strAr);

let str2="hello world";

let strAr2=str2.split(" ");
//console.log(strAr2);



// join is just the reverse of split 

// it works for array it joins all the elements of an array 
let arr=["a","b","c","d"];
console.log(arr.join(","))








