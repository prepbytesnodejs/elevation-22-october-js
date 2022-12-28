function getRandomArbitrary(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
}

function foo(num,cb){

  if(num%2==0){
    cb(null,"Its even")
  }else{
        cb(new Error("Its not even"),"")

  }

  
}

function RandomNum(){

  
setInterval(()=>{
 let num= getRandomArbitrary(10,100)

  foo(num,function(error,result){

    console.log(error,result);
    
  })
  
},1000)

  
}

RandomNum();

// settimeout 


function getRandomArbitrary(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
}

function foo(num,cb){

  if(num%2==0){
    cb(null,"Its even")
  }else{
        cb(new Error("Its not even"),"")

  }

  
}

function RandomNum(){
for(let i=0;i<10;i++){
  setTimeout(()=>{
 let num= getRandomArbitrary(10,100)

  foo(num,function(error,result){

    console.log(error,result);
    
  })
  
},1000*i)
  
}
  


  
}

RandomNum();