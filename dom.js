let htmlelement=document.getElementById("heading");
// they are used to select the elements
// document.getElementsByClassName("heading"); // multiple elements
// document.getElementsByTagName("heading");  // multiple elements
//// document.querySelector();  // single element
///document.querySelectorAll();  // multiple element
//htmlelement.style.color="brown"

// click ,change ,keypress ,keydown ,scroll ,mouseover ,mouseenter

let buttonElement=document.getElementById("button");

buttonElement.addEventListener("click",function(){
    htmlelement.style.color="green";
alert("hello people");
console.log(99999)

})

// create a page with button and change the fontfamily of heading on the button click