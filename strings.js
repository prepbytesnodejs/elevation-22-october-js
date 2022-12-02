// strings 
// characters -- A ,B ,C
// combination of characters are called as string

//let str="shubham";
//console.log(str[0]);
/*
for (let i=0;i<str.length;i++){

  //console.log(str[i]);
}
*/
// strings are more less equals to the character array and you can iterate them an access them just like you do with arrays 

// There are few methods we gonna be talking about in string

// toUpperCase --->it converts string to uppercase


/// Revers a string ---> using for loop
let str2="john";
let rev="";

for(let i=str2.length-1;i>=0;i--){
  //console.log(str2[i]);
  
  //rev=rev+str2[i];

  rev=rev+str2.charAt(i);
}

console.log(rev);