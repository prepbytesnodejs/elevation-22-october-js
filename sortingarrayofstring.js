let arr=["bat","cat","rat","dog"];

//let str1="bat";
//let str2="baz";
//console.log(str1.localeCompare(str2));  // -1

// if str1 comes before str2 it returns -1
// if str2 comes after str2 it returns 1

//let arr2=arr.sort();

//console.log(arr2);

// bubble sort --->

// sorts an array of string with localCompare
// O(N2)  ---> complexity
for(let i=0;i<arr.length;i++){

  for(let j=0;j<arr.length;j++){

    if(arr[j].localeCompare(arr[i])==1){

       // swap it 

      let temp=arr[j];
      arr[j]=arr[i];
      arr[i]=temp
      
    }
    
  }

  
}

console.log(arr)