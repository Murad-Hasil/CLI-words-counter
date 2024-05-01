import inquirer from "inquirer";
import chalk from "chalk";


// Display a colorful welcome message
console.log(chalk.blueBright(`\t<<<<<<===========================>>>>>>`));
console.log(chalk.bold.grey(`\tWelcome to the project, (Words-Counter)`));
console.log(chalk.blueBright(`\t<<<<<<===========================>>>>>>`));


// Prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please enter a sentence: ",
    }
]);


// Triming the sentence and spliting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold.gray("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.gray(`\n - Words Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));