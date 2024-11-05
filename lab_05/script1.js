
let firstNumber = Number(prompt("Please input the first number"));
let mathSign = prompt("Please input the math sign");
let secondNumber = Number(prompt("Please input the second number"));

if (mathSign == '+') {
    alert(firstNumber + secondNumber);
}

else if (mathSign == '-') {
    alert(firstNumber - secondNumber);
}

else if (mathSign == '*') {
    alert(firstNumber * secondNumber);
}

else if (mathSign == '/') {
    alert(firstNumber / secondNumber);
}

else {
    alert("Incorrect math sign!")
}