// async and await are just keywords
// async is used with function always  ,just before function keyword
// await is used to get the resolved value of promise


function Myfunction(num) {

    const anything=new Promise(function(resolve,reject){

      setTimeout(()=>{
         if(num%2==0){
        resolve("Its even")
      }else{
        reject("its odd")
      }
        
      },1000)
     
      
    })
  return anything
  }
/*
 Myfunction(9).then(function(data){
   console.log(data);
 }).catch(function(err){
   console.log(err);
 })
*/
 async function GetData(){



 let data= await  Myfunction(90);
  console.log(data);
  
}

//GetData()


async function GetDataError(){

  try{
    
 let data= await  Myfunction(97);
  console.log(data);
  }catch(err){
    console.log("Error here",err);
  }


  
}

GetDataError();

// top level await --->