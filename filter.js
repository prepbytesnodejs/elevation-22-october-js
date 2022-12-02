// filter --->
// if you want to filter out the data from an array based on some condition ,we can use array fiter

let arr=[1,2,3,88,78,66,19];
// we have to find all the numbers that are even
let arrofEvennum=[];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    arrofEvennum.push(arr[i])
    //console.log();
  }
}

console.log(arrofEvennum)

let filteredArr=arr.filter(function(data){
  /*if(data%2==0){
    return data;
  }
                           */
  return data%2==0;
  
})

//console.log(filteredArr)
// given an array [1,19,23,2,12,17 ]; ,fliter out all the prime numbers from an array 


