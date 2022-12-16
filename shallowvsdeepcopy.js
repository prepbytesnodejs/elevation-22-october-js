/*let obj={name:"John",age:34,address:{city:"Delhi"}};

let obj2={};
Object.assign(obj2,obj);

//console.log(obj2);

//obj.name="Rita";
obj.address.city="Noida"
console.log(obj);
console.log(obj2);
*/

// shallow copy and deep copy

let obj={name:"john"}; //16 bytes
obj.city="kanpur"; //32  // shallow copy
let objc=JSON.parse(JSON.stringify(obj));  // deep copy
let obj2=obj;
obj.name="Adii";
console.log(obj);  // {"name":"Adii"} what it will print?
console.log(obj2); // {name:"John"} what it will print

let c=[1,23,4,5];
let k=c;
c.push(99);
console.log(c);
console.log(k);
/*
let a=9;  //8 bytes
let b=a;
a=a+1;
console.log(b)
console.log(a);
*/

// Deep copy 




console.log(objc);


//How to check empty object ---
let obj={};
undefined
console.log(Object.values(obj).length);