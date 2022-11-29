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