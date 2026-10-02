const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 3;

function askGuess() {
    rl.question(`Guess a number between 1 and 10 (${attempts} attempts left): `, (answer) => {

        const guess = Number(answer);

        if (guess === randomNumber) {
            console.log("🎉 Correct! You won!");
            rl.close();
        } 
        else {
            attempts--;

            if (attempts === 0) {
                console.log("❌ Game Over!");
                console.log("The correct number was:", randomNumber);
                rl.close();
            } 
            else if (guess < randomNumber) {
                console.log("📈 Too low!");
                askGuess();
            } 
            else {
                console.log("📉 Too high!");
                askGuess();
            }
        }
    });
}

askGuess();
