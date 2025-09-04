// Function
function greet(){
    console.log("Hello, World!")
}
greet()

//Arrow Function
const greet2 = () => console.log("Hello, World!")

//First Class Function
function calculate(num1, num2, operation){
    return operation(num1, num2)
}
const add = (a, b) => a + b
const multiply = (a, b) => a * b

console.log(calculate(5, 3, add)) // Output: 8
console.log(calculate(5, 3, multiply)) // Output: 15

//Callback Function
const greet3 = (name) => {
    setTimeout(() => {
        console.log(`Hello, ${name}!`)
        
    }, 1000)
}
greet3("Damaris")

//Anonymous Function
setTimeout(function(){
    console.log("This is an anonymous function")
}, 2000)

const salads = ["Caesar", "Greek", "Vegetable"]
salads.forEach(function(salad){
    console.log(`I like ${salad} salad`)
})

var a = 9
