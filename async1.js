// setTimeout and setInterval are handled asynchronously 
console.log("1");


setTimeout(function OrderFromCustomerA(){
  console.log("Order For customer a served");
},5000);


console.log("handed menu to customer 2");

console.log("hand the menu to customer 3");


// Always look for 3 things in js --->
// setTimeout //setInterval 
// Apicalls