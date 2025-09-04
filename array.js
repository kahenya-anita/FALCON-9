//What is an array?
//Data structure used to store collection of elements that are usually indexed
//Arrays begin at index 0 and end at index -1

const genres = ["horror", "fantasy", "sci-fi", "thriller"]
console.log(genres[0])
//last element
console.log(genres[genres.length - 1])
console.log(genres.length)

//Types of Arrays
//1) Single Dimensional Array
//2)Multi Dimensional Array
//- 1D ARRAY, 2D ARRAY, 3D ARRAY, 4D ARRAY
const chessboard = [
    ["Rook", "Knight", "Bishop", "Queen", "King"],
    ["Pawn", "Pawn", "Pawn", "Pawn", "Pawn"],
    ["", "", "", "", ""],
]
// console.log(chessboard[1][1]) // Second Pawn
// console.log(chessboard[0][4])
console.log(chessboard[0][chessboard.length - (- 1)]) 

//Array Methods
//1)Destructive Methods - Modify the original array
//- shift(), unshift(), pop(), push(), splice(), sort(), reverse()
//2) Non-Destructive Methods - Do not modify the original array
// - concat(), includes(), indexOf(), join(), slice(), toString(), filter(), map(), reduce(), forEach()

const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.push("Pineapple"))
console.log(fruits) 

//Pop works by removing the last element of the array
console.log(fruits.pop())
console.log(fruits)
//Shift works by removing the first element of the array
console.log(fruits.shift())
console.log(fruits)
//Unshift works by adding an element to the beginning of the array
console.log(fruits.unshift("Strawberry"))
console.log(fruits)

//Splice works by removing or replacing elements in an array
//splice(starting index, number of elements to be removed, elements to be added)
console.log(fruits.splice(2, 1, "Kiwi", "Grapes"))
console.log(fruits)

//Sort works by sorting the elements of an array in ascending order
console.log(fruits.sort())
console.log(fruits)
//Reverse works by reversing the order of the elements in an array
console.log(fruits.reverse())
console.log(fruits)

//Concat works by merging two or more arrays
const vegetables = ["Carrot", "Broccoli", "Spinach"]
const food = fruits.concat(vegetables)
console.log(food)
console.log(fruits)
console.log(vegetables)

//Includes works by checking if an array contains a specific element
console.log(fruits.includes("Apple"))
console.log(fruits.includes("Banana"))

//IndexOf works by returning the first index of a specific element in an array
console.log(fruits.indexOf("Mango"))
console.log(fruits.indexOf("Banana"))

//Join works by joining all elements of an array into a string
console.log(fruits.join(", "))
console.log(fruits.join(" - "))

//Slice works by extracting a section of an array and returning a new array
console.log(fruits.slice(1, 3))
console.log(fruits.slice(2))

//ToString works by converting an array into a string
console.log(fruits.toString())
console.log(typeof(fruits.toString()))

//Filter works by creating a new array with all elements that pass a test   
console.log(fruits.filter((fruit) => fruit.length > 5))

//Map works by creating a new array with the results of a function for each element 
console.log(fruits.map((fruit) => fruit.toUpperCase()))

//Reduce works by reducing an array to a single value by executing a function for each element
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0))

//ForEach works by executing a function for each element in an array
fruits.forEach((fruit) => console.log(fruit))