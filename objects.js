let human={name:"shubham",age:29,address:{
    city:"kanpur",
    pincode:209899
  },education:["Btech","PG","12"]};
  
  //console.log(human.address.city);
  
  //console.log(human["address"].city)
  //console.log(human.address)
  
  let add="address"
  console.log(human.add) // it will look for add key,you cant pass dynamic variable
  console.log(human[add])  // it will look for value stored in add 
  
  console.log(human["address"]) 
  
  console.log(human["add"])  // it will look for add key in the human object