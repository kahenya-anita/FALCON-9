//1) Global Scope - Accessible from anywhere in the code.
//2) Local Scope/Functional Scope - Accessible only within the function where it is defined.
//3) Module Scope - Accessible only within the module/file where it is defined.
// 4) Block Scope - Accessible only within the block ie {}
// 5) Lexical Scope - When a child function is able to access the variables of 
//  its parent function, even after the parent function has finished executing.

let number2 = 20 
function a(){
    let number1 = 10
    function b(){
        console.log(number1)
    }
    b()
    
}
a()
//Outer Function/Parent
function gymRat(){
    const workout = "Bulgarian Split Squat"

    //Inner Function
    function beginner(){
        const sets = 3
        console.log(`Beginner: ${sets} sets of ${workout}`)
    }
    beginner()
}
gymRat()
