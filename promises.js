function CheckevenOrNot(num){

    if(num%2==0){
        return true;
      }
    
      return false;
    }
    
    
    
    
    function CheckitAsync(cb){
    
    
      setTimeout(()=>{
          
     let result= CheckevenOrNot(19)  //async function
    
      if(result==true){
        cb( null,"its even")  // no error in this case
      }else{
        cb(new Error("Its odd"),null)    // not even that means this is an error case
      }
        
      },10000)
    
    
    
    }
    
    
    CheckitAsync(function(err,result){
      console.log(err,result);
      
    })
    
    
    
    // callback appraoch
    
    
    
    function Checkit(cb){
    
    
      
     let result= CheckevenOrNot(19)  //async function
    
      if(result==true){
        cb( null,"its even")  // no error in this case
      }else{
        cb(new Error("Its odd"),null)    // not even that means this is an error case
      }
    }
    
    /*
    Checkit(function(err,result){
      console.log(err,result);
      
    })
    */
    
    
    
    // promise approach
    
    
    
    const myPromise=new Promise( (res,rej)=>{
    
      //setTimeout is used here to produce asynchronous behaviour
      setTimeout(()=>{
       let result= CheckevenOrNot(8)
    
        if(result==true){
          res("Its even")
          
        }else{
          rej("Not even")
          
        }
      },4000)
      
      
    } );
    
    //console.log(myPromise);

    //Callback approach 

    // you have to iterate over an array and you have to check whether the array is sorted or not 
// then if it sorted resolve the promise
// if it is unsorted reject the promise


// Clalback approach
// if arr is sorted -->pass error has null in cb otheriwser pass new Error()

function checkArrayIsSorted(arr){
    for(let i=0;i<arr.length;i++){
  
      if(arr[i]>arr[i+1]){
        return false;
        
      }
    }
  
    return true;
  }
  
  // Call back approach
  
  function CallBackApporach(arr,cb){
    setTimeout(()=>{
      
      let sorted=checkArrayIsSorted(arr)
  
      if(sorted){
  
        cb(null,"Its sorted")
      }else{
              cb(new Error("Not sorted"),null)
  
      }
      
      
    },1000)
  
  
    
  }
  let arr34=[2,3,7,8,9];
  CallBackApporach(arr,function(err,result){
    console.log(err,result);
    
  })
  
  let arr2=[12,3,7,8,19];
  CallBackApporach(arr2,function(err,result){
    console.log(err,result);
    
  })


  // ---->Promise approach --->

  // you have to iterate over an array and you have to check whether the array is sorted or not 
// then if it sorted resolve the promise
// if it is unsorted reject the promise


// Clalback approach
// if arr is sorted -->pass error has null in cb otheriwser pass new Error()

function checkArrayIsSorted(arr){
    for(let i=0;i<arr.length;i++){
  
      if(arr[i]>arr[i+1]){
        return false;
        
      }
    }
  
    return true;
  }
  
  // Call back approach
  
  function CallBackApporach(arr,cb){
    setTimeout(()=>{
      
      let sorted=checkArrayIsSorted(arr)
  
      if(sorted){
  
        cb(null,"Its sorted")
      }else{
              cb(new Error("Not sorted"),null)
  
      }
      
      
    },1000)
  
  
  }
  let arr=[2,3,7,8,9];
  CallBackApporach(arr,function(err,result){
    //console.log(err,result);
    
  })
  
  let arr2=[12,3,7,8,19];
  let arr3=[7,6,5,4,32]
  CallBackApporach(arr3,function(err,result){
    console.log(err,result);
    
  })
  
  
  // Promise approach
  
  const promise=new Promise((res,rej)=>{
  
      setTimeout(()=>{
      
      let sorted=checkArrayIsSorted(arr)
  
      if(sorted){
  
        res("Its sorted")
      }else{
              rej("Not sorted")
  
      }
      
      
    },1000)
    
  })