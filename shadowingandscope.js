let  h=9;
//global scope

function foo(){

  let h=99;
  //parent scope2

  console.log(h);

  if(true){
    //let h=12;
    // parent scope 1

    for(let i=0;i<10;i++){
      //let h=56;

      //local scope

      //console.log(h);
    }
  }
}

foo();

// Scope chain is working 

// Local scope --->parent scope 1 (if not available)--->parent scope 2--->global scope --->if its not available in the global scope as well ,then you get an error that variable is not defined 