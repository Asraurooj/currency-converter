#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Wellcome to 'codewithasra' - currency converter\n"));
//Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70, //Pakistan Rupees
    //Add more currencies and their exchange rates here
};
//Prompt the user to select currencies to connect from and to
let user_answers = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select tht currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//Perform currency converter by using formula
let from_amount = exchange_rate[user_answers.from_currency];
let to_amount = exchange_rate[user_answers.to_currency];
let amount = user_answers.amount;
//formula ofconversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
