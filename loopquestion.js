//First question how to determine a prime number or -->->
function checkPrime(num){

    if (num==0){
      return "Not a Prime number";
    }
      else if (num==1){
        return "prime number";
      }
      else{
    
        // run our for loop 
        for (let i=2;i<num;i++){
    
          if(num%i==0){
            return "Not a prime number"
          }
          
        }
    
        
      }
    
    
      return "prime number"
    
      
    }
    
    //console.log(checkPrime(13))
    //console.log(checkPrime(2))
    //console.log(checkPrime(9))
    
    // You have to print all the prime numbers from 1-100 using both while and for loop



// To check whether the number is prime or not ?
function checkPrime(num){

    if (num==0){
      return false;
    }
      else if (num==1){
        return true;
      }
      else{
    
        // run our for loop 
        for (let i=2;i<num;i++){
    
          if(num%i==0){
            return false
          }
          
        }
    
        
      }
    
    
      return true
    
      
    }
    
    
    // we have to print all the prime numbers from 0 -100
    function allPrimeNumbers(n){
      for(let i=0;i<n;i++){
       // console.log(i);
        let value=checkPrime(i);
        if (value==true){
          console.log("number is prime")
        }else{
                console.log("number is not  prime")
    
        }
        
      }
    
    
      
    }
    //allPrimeNumbers(10);
    //checkPrime(0)  -->false
    ////checkPrime(1)  -->true
    ////checkPrime(2)  -->false
    
    //checkPrime(9) -->false
    
    
    // Print all the even numbers between 1-100 using function
    // i%2==0;
    
    
    function checkEven(num){
      if(num%2==0){
        return true; // its an even number
      }else{
        return false ; // not an even number
      }
      
    }
    
    function printeven(){
    
      for(let i=1;i<=100;i++){
        
         if(checkEven(i)==true){
           console.log("its even",i)
           
         }
        
        
      }
    
    
      
    }
    
    printeven()


    function pattern(){
  
        for(let i=0;i<4;i++){
          let str="";
          for(let j=0;j<4;j++){
            str=str+"*"
        }
          console.log(str);
          console.log("")
        }
      }
        pattern(4)



        const pattern_one = () => {
            let string = "";
            for(let i=1;i<=4; i++ ) {
                for(let j =1;j<=4; j++) {
                    string += "*";
                }
                string += "\n";
            }
        
            console.log(string)
        }

        
        let num=1;
let num2=2;

console.log(num | num2);
console.log(num & num2);

// Array functions
/*
let arr=[1,2,3,4,5];

//
arr.forEach(function cb (data,index){
  console.log(data,index);
  
} )


function myForEach(cb){
let arr=[1,2,3,4,5];

  for (let i=0;i<arr.length;i++){
    cb(arr[i],i);
    
  }

  
}
console.log("My custom for Each ----------")
myForEach( function cb (data,index){
  console.log(data,index);
  
}     )
*/

// For each is used to iterate over array elements
let arr=[1,2,3,4,4,7];
let sum1=0
for (let i=0;i<arr.length;i++){
  sum1=sum1+arr[i];
  //console.log(arr[i],i);
}

console.log(sum1);
let sum2=0;
arr.forEach(function(data){
  sum2=sum2+data;
  //console.log(data,index)
  
})

console.log(sum2);


// find out all the primes numbers in an array using foreach loop
// find out the largest number in an array using forEach loop

let arr2=[100,201,3,41,500,61];
let maxArrv=arr2[0];

arr2.forEach(function(data){

  if(data>maxArrv){
    maxArrv=data;  // reassign if you get bigger number
    
  }
  
  
})

console.log(maxArrv)


function checkPrime(num){

    if (num==0){
      return false;
    }
      else if (num==1){
        return true;
      }
      else{
    
        // run our for loop 
        for (let i=2;i<num;i++){
    
          if(num%i==0){
            return false
          }
          
        }
    
        
      }
    
    
      return true
    
      
    }

arr2.forEach(function(data){
let isPrime=checkPrime(data);

  if(isPrime==true){
    console.log("Prime number")
    
  }else{
        console.log("Not a Prime number")

  }
  
  
})