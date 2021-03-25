let num1 = +prompt("Write a:");
let num2 = +prompt("Write b:");
const operator = prompt("Write operator:");

function sum(a , b){
  return a + b;
}

function sub(a , b){
  return a - b;
}

function mul(a , b){
  return a * b;
}

function div (a , b){
  return a / b;
}

const highOrderFunc = function (num1 , num2, operationFunc){
  const result = operationFunc(num1 , num2);
  console.log(operationFunc);
  return result;

 }

switch(operator){
  case "+": {
    const result2= highOrderFunc(num1, num2, sum);
    console.log(result2);
    break;
  }
  case "-": {
    const result3 = highOrderFunc(num1, num2, sub);
    console.log(result3);
    break;
  }
  case "*": {
    const result4= highOrderFunc(num1, num2, mul);
    console.log(result4);
    break;
  }
  case "/": {
    const result5= highOrderFunc(num1, num2, div);
    console.log(result5);
    break;
  }
}