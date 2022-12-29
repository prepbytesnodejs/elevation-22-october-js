//Promise implementation --->

// Promise creation
const promise=new Promise(function(resolve,reject){
    // To bring up asynchronous behaviour
  // we are using 
    setTimeout(()=>{
      resolve("Promise resolved");
      
    },5000)
    
  })
  
  // Promise creation
  const promise2=new Promise(function(resolve,reject){
    // To bring up asynchronous behaviour
  // we are using 
    setTimeout(()=>{
      reject("Promise Has Got rejected Due to some reasons");
      
    },1000)
    
  })
  
  console.log(promise2);
  
  
  // This is how you get the result from promise
  // success value we are getting here
  promise.then(function(data){
   // console.log(data);
    
  }).catch(function(err){
    console.log(err);
  })
  
  // Error Value we are getting here
  
  
  // This is how you get the result from promise
  
  promise2.then(function(data){
    console.log(data);
    
  }).catch(function(err){
  //  console.log("Error",err);
  })
  
  
  // Initailly promise is  in pending state 
  // Then promise either get resolved  or get rejected
  // resolved and reject cant exist together it either is resolved or its rejected



  function Myfunction(num) {

    const anything=new Promise(function(resolve,reject){
  //let num=9;
      if(num%2==0){
        resolve("Its even")
      }else{
        reject("its odd")
      }
      
    })
  return anything
  }
  
  Myfunction(8).then(function(data){
    console.log(data);
    
  }).catch(function(err){
    console.log("Error",err);
  })
  
  
  Myfunction(7).then(function(data){
    console.log(data);
    
  }).catch(function(err){
    console.log("Error",err);
  })