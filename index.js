import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number  and shoe result
const randomNumber = 13;
const answer = await inquirer.prompt([
    { name: "user guess number",
        type: "number",
        message: "Please guess a number:",
    }
]);
console.log(answer);
