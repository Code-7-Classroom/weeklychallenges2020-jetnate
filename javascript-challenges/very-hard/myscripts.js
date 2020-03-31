var inputNum1=parseInt(prompt("enter a number"));
var inputNum2=parseInt(prompt("enter another number"));
var operator=prompt("Enter an operator");

function subtract(){return inputNum1 - inputNum2;}
function addition(){return inputNum1 + inputNum2;}
function multiply(){return inputNum1 * inputNum2;}
function divide() {return inputNum1 / inputNum2;}

// if (operator == '+')  {
//     console.log (inputNum1 + ' ' + operator + ' ' + inputNum2 + '=' + addition ());}
//     else if (operator == '-')
//     { console.log (inputNum1 + ' ' + operator + ' ' + inputNum2 + '=' + subtract());}
//     else if (operator == '-')
//     { console.log (inputNum1 + ' ' + operator + ' ' + inputNum2 + '=' + multiply ());}
//     else if (operator == '/')
//     { console.log (inputNum1 + ' ' + operator + ' ' + inputNum2 + '=' + divide ());}
//     else {console.log( "That value is not valid" );}

console.log(operator);

if (operator == '+') {
    console.log( 'user said +' ) ;
} 

else if (1==1) {

    console.log('user said that value was true')
}
else {
    console.log('The operator wasnt expected')
}