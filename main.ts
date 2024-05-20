#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

//////player class
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
fuelDecrease(){                     //////player fuel decrease
let fuel = this.fuel -25
    this.fuel = fuel

}
fuelIncrease(){           //////player fuel increase
    this.fuel = 100
    
    }

}
/////opponent class
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease(){                         ///////opponent fuel decrease
    let fuel = this.fuel -25
        this.fuel = fuel
    
    }
}
console.log(chalk.rgb(246, 123, 127).bold("\t \n Welcome to Siddiqa CLI Adventure Game \n "));
////method to get player name
let player = await inquirer.prompt([
  {
    name:"name",
    type: "input",
    message: chalk.rgb(28, 234, 79).bold("\t \n Please Enter your name:"),
  }
])


//method to get opponent name
let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: chalk.rgb(12, 27, 80).bold(" \t \n Select your Opponent "),
    choices: ["Skeleton", "Zombie", "Assassin"]
  }
  
])
////gather data from user

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
console.log(chalk.magenta.bold(`\t ${player.name} VS ${opponent.select}`));


///loop for condition when user select skeleton 
do{
    if(opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
    {
    name: "opt",
    type: "list",
    message:chalk.rgb(232, 20, 203)("\t \n Select Your Option: \n"),
    choices: ["Attack", "Drink Portion", "Run for Your life..."]
}
]);
    if(ask.opt == "Attack") {
       let num = Math.floor(Math.random() * 2)
       if(num > 0) {
           p1.fuelDecrease()
           console.log(chalk.rgb(224, 123, 125)(`${p1.name} has ${p1.fuel} fuel left`));
           console.log(chalk.rgb(0, 255, 255)(`${o1.name} has ${o1.fuel} fuel left`));
           if(p1.fuel <= 0) {
            console.log(chalk.rgb(231, 140, 15)("\t You Loose, Better Luck Next Time"));
           process.exit()
       } 
      }
if(num <= 0){

    o1.fuelDecrease()
    console.log(chalk.rgb(188, 83, 84).bold(`${p1.name} has ${p1.fuel} fuel left`));
    console.log(chalk.rgb(0, 128, 0).bold(`${o1.name} has ${o1.fuel} fuel left`));
    if(o1.fuel <= 0) {
      console.log(chalk.rgb(231, 140, 15)("\t You Win Congratulation!"));
     process.exit()
 } 

}
    }
    if(ask.opt == "Drink Portion") {
        p1.fuelIncrease()
        console.log(chalk.rgb(131, 97, 74)(`\t You Drink Health Portion So Your Fuel is ${p1.fuel}`));
        
    }

    if(ask.opt == "Run for Your life...") {
      console.log(chalk.rgb(231, 140, 15)("\t You Loose, Better Luck Next Time"));
        process.exit()
    }

  
  
    
}
   
////// loop /when user select Zombie
if(opponent.select == "Zombie") {
  let ask = await inquirer.prompt([
{
name: "opt",
type: "list",
message:chalk.rgb(232, 20, 203)("\t \n Select Your Option: \n"),
choices: ["Attack", "Drink Portion", "Run for Your life..."]
}
]);
if(ask.opt == "Attack") {
 let num = Math.floor(Math.random() * 2)
 if(num > 0) {
     p1.fuelDecrease()
     console.log(chalk.rgb(224, 123, 125)(`${p1.name} has ${p1.fuel} fuel left`));
     console.log(chalk.rgb(0, 255, 255)(`${o1.name} has ${o1.fuel} fuel left`));
     if(p1.fuel <= 0) {
      console.log(chalk.rgb(231, 140, 15)("\t You Loose, Better Luck Next Time"));
     process.exit()
 } 
}
if(num <= 0){

o1.fuelDecrease()
console.log(chalk.rgb(188, 83, 84).bold(`${p1.name} has ${p1.fuel} fuel left`));
console.log(chalk.rgb(0, 128, 0).bold(`${o1.name} has ${o1.fuel} fuel left`));
if(o1.fuel <= 0) {
console.log(chalk.rgb(231, 140, 15)("\t You Win Congratulation!"));
process.exit()
} 

}
}
if(ask.opt == "Drink Portion") {
  p1.fuelIncrease()
  console.log(chalk.rgb(131, 97, 74)(`\t You Drink Health Portion So Your Fuel is ${p1.fuel}`));
  
}

if(ask.opt == "Run for Your life...") {
console.log(chalk.rgb(231, 140, 15)("\t You Loose, Better Luck Next Time"));
  process.exit()
}




}

///////loop /when user select Assassin next time
if(opponent.select == "Assassin") {
  let ask = await inquirer.prompt([
{
name: "opt",
type: "list",
message:chalk.rgb(232, 20, 203)("\t \n Select Your Option: \n"),
choices: ["Attack", "Drink Portion", "Run for Your life..."]
}
]);
if(ask.opt == "Attack") {
 let num = Math.floor(Math.random() * 2)
 if(num > 0) {
     p1.fuelDecrease()
     console.log(chalk.rgb(224, 123, 125)(`${p1.name} has ${p1.fuel} fuel left`));
     console.log(chalk.rgb(0, 255, 255)(`${o1.name} has ${o1.fuel} fuel left`));
     if(p1.fuel <= 0) {
      console.log(chalk.rgb(231, 140, 15)("\t You Loose, Better Luck Next Time"));
     process.exit()
 } 
}
if(num <= 0){

o1.fuelDecrease()
console.log(chalk.rgb(188, 83, 84).bold(`${p1.name} has ${p1.fuel} fuel left`));
console.log(chalk.rgb(0, 128, 0).bold(`${o1.name} has ${o1.fuel} fuel left`));
if(o1.fuel <= 0) {
console.log(chalk.rgb(231, 140, 15)("\t You Win Congratulation!"));
process.exit()
} 

}
}
if(ask.opt == "Drink Portion") {
  p1.fuelIncrease()
  console.log(chalk.rgb(131, 97, 74)(`\t You Drink Health Portion So Your Fuel is ${p1.fuel}`));
  
}

if(ask.opt == "Run for Your life...") {
console.log(chalk.rgb(231, 140, 15)("\t You Loose, Better Luck Next Time"));
  process.exit()
}




}
}
  
while(true)
