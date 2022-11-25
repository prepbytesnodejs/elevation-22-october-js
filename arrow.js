// es5 function

function checkdivisibility(num)
{
}
checkdivisibility(54);

// arrow function 
// definition
let arrowFn=()=>{

  
    if (num%6==0 && num%9==0)
    {
        console.log("by both")
    }
   else  if (num%6==0)
    {
       console.log("yes by 6")
    }
    else if (num%9==0)
    {
        console.log("yes by 9")
    }
   
    else{
        console.log("not by any")
    }
  
}

arrowFn();


// Es5 fn                 

function name(){
  // code you want to execute 
  
}
// arrow fn
const name=()=>{
  // function code you want to execute
}



// Calculate the sum of 5 numbers using arrow functions  and return the value from it


// es5 function

function checkdivisibility(num)
{
}
checkdivisibility(54);

// arrow function 
// definition
let arrowFn2=(num)=>{

  
    if (num%6==0 && num%9==0)
    {
        console.log("by both")
    }
   else  if (num%6==0)
    {
       console.log("yes by 6")
    }
    else if (num%9==0)
    {
        console.log("yes by 9")
    }
   
    else{
        console.log("not by any")
    }
  
}

//arrowFn();


// Es5 fn                 

function sumEs5(a,b,c,d,e){
    var sum=a+b+c+d+e;
  //console.log(sum);
   // return sum;
  return sum;

}
const c=sumEs5(7,8,9,1);
//console.log(c);

function  multiplythesumby10(){
  let j=10*sumEs5(2,3,4,5,6);

  console.log(j);



  
}
//multiplythesumby10();

//let output=sumEs5(2,3,4,5,6);
//console.log(output);
//console.log(sumEs5(20,30,41,51,61))


// es6 or arrow function
 es6=(a,b,c,d,e)=>{  //es6 is function name
    var sum=a+b+c+d+e;
    return sum;
}
console.log(es6(1,2,3,4,5));

// switch cases



function checknumber(val){

    switch(val){
        case 2 :
           console.log( "Its a even number")
       break;
       
       case 3 :
             console.log("Its an odd number")
        break;

        case 20 :
             console.log("Its a 20 value")
        break;  
    
       default:
           console.log("Nothing matches" )   
    
    }


}

//checknumber(2);
//checknumber(3);
checknumber(20);
  

function num(){
    return 2;
  }
  
  
  function checkshoes(shoes){
    
  
      switch(shoes){
        case "Puma" :
             console.log( "Its a even number")
         break;
         
         case "Adidas" :
               console.log("Its a addidas number")
          break;
  
          case "Nike" :
               console.log("Its a 20 value")
          break;  
      
         default:
             console.log("Nothing matches" )   
      
      }
  
  
  }
  
  //checknumber(2);
  //checknumber(3);
  //checknumber(20);
  
  
  
  
   checkshoes("Adidas")
      
  
  
  