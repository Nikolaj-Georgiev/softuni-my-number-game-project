function myNumberGameProject() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let machineGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsynchronReadLine = function() {
        readline.question('What\'s the magic number between 0 and 100? ', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {
                if (guess == machineGuess) {
                    console.log('You\'r right!:)');
                } else if (guess < machineGuess) {
                    console.log('You\'r too low!');
                    recursiveAsynchronReadLine();
                } else if (guess > machineGuess) {
                    console.log('You\'r high... get low! :)');
                    recursiveAsynchronReadLine();
                } else {
                    console.log('Invalid input! Try again with number between 0 and 100!');
                    recursiveAsynchronReadLine();
                }
            } else {
                console.log('Invalid input! Try again with number between 0 and 100!');
                recursiveAsynchronReadLine();
            }
        });
    }
    recursiveAsynchronReadLine();
}
myNumberGameProject();