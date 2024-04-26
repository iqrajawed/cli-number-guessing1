#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 9 + 1);
let numberGuess = await inquirer.prompt([{
        name: " numberGuess",
        type: "number",
        message: "please give a number"
    }]);
if (numberGuess === randomNumber) {
    console.log("Congralution! you win");
}
else {
    console.log("Ahh! you lost");
}
//console.log(numberGuess);
