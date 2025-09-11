//DOM Document Object Model Elements are usually considered as nodes
//How do we access the DOM?
//1)Dev Tools
//2)JavaScript
//3)DOM Methods
//Traversing the DOM - moving up and down the DOM tree
//Selecting By ID => ID NAME
document.getElementById("home")
//Selecting By Class Name => CLASS NAME
document.getElementsByClassName("container")
//Selecting by Tag => H1
document.getElementsByTagName("h1")
//Selecting Using Query Selector
document.querySelectorAll((".main-header"))//All elements with the class name main-header
document.querySelector((".main-header")) //First element with the class name main-header

//CREATING AND INSERTING ELEMENTS IN THE DOM
// 1)Create the Element
// 2)Add attributes or Content
// 3)Find the parent element where you want to insert the new element
// 4)Insert the element

//1)Create
const newDiv = document.createElement("div")
//2)Add attributes or Content
newDiv.textContent = "I Love JavaScript!!"
//3)Find the parent element where you want to insert the new element
const parentElement = document.querySelector("#home")
//4)Insert the element
parentElement.appendChild(newDiv)
// parentElement.insertBefore(newDiv, parentElement.firstChild) //Adds the new element at the beginning of the parent element