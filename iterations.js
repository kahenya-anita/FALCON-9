const demonSlayer = [
    {
        name: "Tanjiro Kamado",
        gender: "Male",
        powers: "Water Breathing, Hinokami Kagura",
        age: 15
    },
    {
        name: "Nezuko Kamado",
        gender: "Female",
        powers: "Demon Blood Art, Regeneration",
        age: 14
    },
    {
        name: "Zenitsu Agatsuma",
        gender: "Male",
        powers: "Thunder Breathing",
        age: 16
    },
    {
        name: "Inosuke Hashibira",
        gender: "Male",
        powers: "Fire Breathing",
        age: 15
    },
    {
        name: "Kanao Tsuyuri",
        gender: "Female",
        powers: "Wind Breathing",
        age: 16
    },
    {
        name: "Muzan Kibutsuji",
        gender: "Male",
        powers: "Demon Blood Art, Regeneration",
        age: 1000
    },
    {
        name: "Kokushibo",
        gender: "Male",
        powers: "Demon Blood Art, Regeneration",
        age: 1000
    }
]

//Map Method
//1) Name of the characters
const name = demonSlayer.map((character) => character.name)
// console.log(name)
//2) Powersof characters
const poweres = demonSlayer.map((character) => character.powers)
// console.log(poweres)

/* FILTER METHOD */
//Create a new array that will include all the elements you wanted to remain with
//1) Female Characters
const femaleCharacters = demonSlayer.filter((character) => character.gender === "Female")
// console.log(femaleCharacters)
//2) Male Characters
const maleCharacters = demonSlayer.filter((character) => character.gender === "Male")
//  console.log(maleCharacters)

 //*REDUCE METHOD*/
 //tAKES ALL THE ELEMENTS OF AN ARRAY AND REDUCES THEM TO A SINGLE VALUE
 //1)Total age of all the characters
 const totalAge = demonSlayer.reduce((total, character) => total +character.age, 0);
//  console.log(totalAge)

 //2)Average age of all the characters
const avrgAge = totalAge / demonSlayer.length
// console.log(avrgAge)

//3)Get the NUMBER  characterW IN THE ARRAYvo

const numOfCharaters = demonSlayer.reduce((count) => count + 1, 0)
// console.log(numOfCharaters)

//*FOR EACH**/
//Works like the map method but it does not create a new array and instead it just executes a provided function once for each array element
//It modifes the original array
demonSlayer.forEach((character) => character.age += 1)
// console.log(demonSlayer)

//** SORT METHOD */
//Sorts elements in the array  by comparing the values
//)Sort By AGE
const sortedCharacters = demonSlayer.sort((a, b) => a.age - b.age)
// console.log(sortedCharacters)

//2)Sort the characters by name
const sortedNames = demonSlayer.sort((a, b) => {
    (a.name > b.name) - (a.name < b.name)
} )
console.log(sortedNames)