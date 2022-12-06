let set=new Set();
set.add(1);
set.add(2);

// iterate over set using forEach Loop
set.forEach(function(e){
  console.log(e);
})
//rest operator
function foo(...args){
for(let i=0;i<args.length;i++){
  console.log(args[i]);
}
  
}

foo(2,3,4,4,5,4,8,9,9,91,9)