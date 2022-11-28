//for loop and while loop --do while   

/// there are three essential parts of loop 
// first -->from where the loop starts
// second --->where the loop ends
// third ---> how the loop reaches from start to end 

// for loop 
/*
for (){
    // . we actually put the code or the logic we want to repeat
}

*/
/*
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
console.log("superman");
*/

for (let i=0;i<10;i++){  // i++ --->i =i+1

    console.log(i);

    console.log("superman")


}


// --->>>first question fizzbuzz 
function fizzbuzz(num){
    if(num%3==0){
  
      console.log("fizz")
    }else if (num%5==0){
          console.log("buzz")
  
      
    }else if (num%3==0 && num%5==0){
       console.log("fizzbuzzz")
    }else{
      console.log("no match")
    }
  
    }
    fizzbuzz(1)
    fizzbuzz(15)

    // for numbers from 1- 1000

    // you have to calculate the sum of 10 natural numbers --->

    // How loop works 

    // Initialization happens once -------------->Conditioncheck ------>logic executes ---->
    //variable change(incremented/decremented) -----.>Condition check (repeat)

    // calculate the product of n numbers using loops

    function fizzbuzz(num){
        if(num%3==0){
      
          console.log("fizz")
        }else if (num%5==0){
              console.log("buzz")
      
          
        }else if (num%3==0 && num%5==0){
           console.log("fizzbuzzz")
        }else{
          console.log("no match")
        }
      
        }
    
    for(let i=0;i<1000;i++){
    fizzbuzz(i)
      
    }
    
    // sum of n natural numbers --
    function sumOfNNumbers(n){
      let sum=0
      for(let i=1;i<=n;i++){
        sum=sum+i;
        
      }
      return sum;
    }
    
    console.log(sumOfNNumbers(10))


    function productOfNNumbers(n){
        let product=1;
          for (let i=1;i<=n;i++){
           
            product=product*i;
            
            
          }
        
        return product;
          
        }
        
        console.log(productOfNNumbers(10));
    
    // print all prime numbers from 1-100

    // ---->how to iterate arrays using for loop

    let arr=[1,2,3,4,6];
//console.log(arr[]);
//console.log(arr[1]);
//console.log(arr[2]);
//console.log(arr.length)
let pos=arr.length-1;
console.log(pos);
console.log(pos)

for(let i=0;i<arr.length;i++){

 // console.log(arr[i]);
}
/*
const Find_Prod = (array, N) => {
    product = 1;
    for (i = 0; i < N; i++) {
      product = product * array[i];
    }
  
    console.log(product);
  };


  Find_Prod(arr,arr.length);
*/
for (let i=0;i<100;i++){
    console.log(i);
  }
  
  
  let i=0
  while(i<100){
    
    console.log(i);
    i++
  }


