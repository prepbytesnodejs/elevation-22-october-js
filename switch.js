
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
  
  
  function gh(num)
    {
  
  switch(true){
  
       case (num%3==0 && num%5==0):
      console.log("fizz");
      break;
  
      case (num%5==0):
      console.log("buzz"); 
      break;
    case (num%3==0):
       
      console.log("fizz buzz");
      break;
  
    default:
      console.log("no match");
       break;
      
      
       
  
  }
  
      switch(false){
  
       case (num%3==0 && num%5==0):
      console.log("fizz");
      break;
  
      case (num%5==0):
      console.log("buzz"); 
      break;
    case (num%3==0):
       
      console.log("fizz buzz");
      break;
  
    default:
      console.log("no match");
       break;
      
      
       
  
  }
    }
  
  gh(19)
  