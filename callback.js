///callbacks --->

// A function passed as an argument to another function call
// is called a function

// what is a parameter is an argument 
/*

function Foo(p1,p2,p3){ //parameter
  p3();
  p1();
  p2();

  
}


Foo(function cb(){

  console.log("Aishwary and anamika are good friends");
  
},function cb(){

  console.log("Aishwary and anamika are bad friends");
  
},
   function df(){

  console.log("Aishwary and anamika are strangers");
  
})  // arguments  // cb here is a callback function



//let arr=[1,2,3,4];
/*
arr.forEach(function(){
  
})
*/


function foo(p){

   // debugger;
  

    p("Ashish");  // cb is being called
      
    }
    
    foo(function  cb (data){
      console.log(data);  // Ashish
    })


    function print(p){
        let arr=[1,2,3,4,55,88];
      
      
        for(let i=0;i<arr.length;i++){
          //console.log(i)
          p(arr[i]);
          
        }
        
      }
      
      print(function callback (data){
        console.log(data);
      })