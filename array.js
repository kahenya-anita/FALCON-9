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