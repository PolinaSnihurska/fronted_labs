let isExecuted = confirm("Start new game\nCurrent balance: 100$");
if (isExecuted) {
    let balance = 100;
    let randomNumber = Math.floor(Math.random() * 6);
    console.log("Random Number:", randomNumber);

    for (let i = 0; i < 3; i++) {
        let givenNumber = prompt(`Guess the Number\nCurrent balance: ${balance}$`);
        console.log("Given Number:", givenNumber);

        if (parseInt(givenNumber) === randomNumber) {
            let reward = (3 - i) * 10 + 20; 
            balance += reward;
            alert(`You won! Your reward is ${reward}$. New balance: ${balance}$`);
            break;
        } else {
            balance -= 10;
            if (i === 2) {
                alert(`You lost! The correct number was ${randomNumber}. Final balance: ${balance}$`);
            } else {
                alert(`Incorrect! Try again. Remaining attempts: ${2 - i}.`);
            }
        }
    }
} else {
    alert("Game canceled.");
}