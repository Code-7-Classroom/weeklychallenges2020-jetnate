// What is the difference between the following JavaScript keywords: var, let and const.  
// Please provide a written explanation. 
// You are able to include a code reference along with your written explanation for each keyword.


// 1. The keyword Var was used mainly before the invention of ES6. Var can be globally scoped or locally scoped inside of a function. 
// Var Variables can also be redeclared or updated in the same scope without giving an error. Below is an example of var.

var hi = "hello"
console.log(hi)

function Nathan(){
    var lastName = "Tadesse"
}

console.log(lastName);// It will throw in error because it is scoped within the function.

//2. The let keyword has a block level scope, which means that can be reassigned within the curly brackets. Here is an example of let below.
let nathan = "cool"

if (nathan === "cool"){
  let nathan = "happy"
  console.log(nathan)//Would be Happy Here
}
console.log(nathan)//Would be cool here

//3. Const acts like Let with Block Level Scope but It can not be reassigned as a primitive value. Below is an example of const.

const Nate = 44;
Nate = 35; //This would result in an error


