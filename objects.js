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


  let obj={key:"value"};
let student={} // empty object 

//key -->will and must always be a string 
// value can be a number ,can be an array can be another string or can be a Map ,can be a Set ,can be another objex

// Methods --->

const mp=new Map();
const set=new Set();
//set.add(89);
//mp.set("city","Delhi");

//student.address=mp;
//student.marks=set;

//console.log(student);

//const human={name:"Bindu",siblings:1,schools:["st loretto","kv"]}

// first Object.values;
let obj2={name:"john",age:90,city:"Delhi"};

// to get all the values of object 

let g=Object.values(obj2);
// get all the keys 

let keys=Object.keys(obj2);

let entries=Object.entries(obj2);
console.log(g); // it returns all the values in the object
console.log(keys);  // it returns all the keys in an object
console.log(entries)  // it returns the array of keys and values

let arr= [ [ 'name', 'john' ], [ 'age', 90 ], [ 'city', 'Delhi' ] ];

// it returns you an object from the array of keys and values
console.log(Object.fromEntries(arr))


let arr3=[
  {
    "_id": "639c800f8cca6fbf02c76b7a",
    "age": 63,
    "name": "Doris Macdonald",
    "address": "736 Dekoven Court, Kirk, Guam, 9437"
  },
  {
    "_id": "639c800fdcd18f1b488ac80a",
    "age": 21,
    "name": "Susana Booker",
    "address": "412 Wyona Street, Brutus, Colorado, 433"
  },
  {
    "_id": "639c800f42a242702d0b3f64",
    "age": 59,
    "name": "Tyson Chase",
    "address": "202 Clarkson Avenue, Riegelwood, Minnesota, 8667"
  },
  {
    "_id": "639c800f8c427e5b797344ec",
    "age": 76,
    "name": "Allison Duke",
    "address": "364 Noll Street, Allendale, Maryland, 4429"
  },
  {
    "_id": "639c800ff310b5fc35cd45e8",
    "age": 58,
    "name": "Angeline Ellison",
    "address": "546 Hinckley Place, Torboy, South Carolina, 9620"
  },
  {
    "_id": "639c800f26a7b218e16e095e",
    "age": 80,
    "name": "Justine Gutierrez",
    "address": "734 Cleveland Street, Newkirk, Idaho, 8590"
  },
  {
    "_id": "639c800f571be3216875c289",
    "age": 18,
    "name": "Leonard Mayo",
    "address": "879 Bergen Avenue, Homestead, Hawaii, 4481"
  },
  {
    "_id": "639c800f17c6272eceb43ba0",
    "age": 24,
    "name": "Jasmine Lowery",
    "address": "808 Norfolk Street, Gadsden, Wisconsin, 8430"
  }
]

// you have to create a function

// I want a result something like 
// output 
//[[639c800f17c6272eceb43ba0,24,Jasmine Lowery,808 Norfolk Street, Gadsden, Wisconsin, 8430],[],[],[]]
// ["Doris Macdonald","Jasmine Lowery","Leonard Mayo","Justine Gutierrez", "Angeline Ellison","Tyson Chase","Susana Booker"]


let arr3=[
  {
    "_id": "639c800f8cca6fbf02c76b7a",
    "age": 63,
    "name": "Doris Macdonald",
    "address": "736 Dekoven Court, Kirk, Guam, 9437"
  },
  {
    "_id": "639c800fdcd18f1b488ac80a",
    "age": 21,
    "name": "Susana Booker",
    "address": "412 Wyona Street, Brutus, Colorado, 433"
  },
  {
    "_id": "639c800f42a242702d0b3f64",
    "age": 59,
    "name": "Tyson Chase",
    "address": "202 Clarkson Avenue, Riegelwood, Minnesota, 8667"
  },
  {
    "_id": "639c800f8c427e5b797344ec",
    "age": 76,
    "name": "Allison Duke",
    "address": "364 Noll Street, Allendale, Maryland, 4429"
  },
  {
    "_id": "639c800ff310b5fc35cd45e8",
    "age": 58,
    "name": "Angeline Ellison",
    "address": "546 Hinckley Place, Torboy, South Carolina, 9620"
  },
  {
    "_id": "639c800f26a7b218e16e095e",
    "age": 80,
    "name": "Justine Gutierrez",
    "address": "734 Cleveland Street, Newkirk, Idaho, 8590"
  },
  {
    "_id": "639c800f571be3216875c289",
    "age": 18,
    "name": "Leonard Mayo",
    "address": "879 Bergen Avenue, Homestead, Hawaii, 4481"
  },
  {
    "_id": "639c800f17c6272eceb43ba0",
    "age": 24,
    "name": "Jasmine Lowery",
    "address": "808 Norfolk Street, Gadsden, Wisconsin, 8430"
  }
]


function GetAllValues(arr){

  let ret=[];

  for(let i=0;i<arr.length;i++){
    ret.push(Object.values(arr[i]))

    
    
  }

  return ret;
  
  
}
console.log(GetAllValues(arr3))

