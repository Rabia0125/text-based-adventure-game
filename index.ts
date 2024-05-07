#! /usr/bin/env node

// This project is not GUI based. It is a console-based game. The video here shows how to develop 
// the game in Java. You will take the requirements of the game from the video and develop the game
// in TypeScript and Node.js.

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold("*** WELCOME TO THE ADVENTURE GAME ***"));

class Player {
    name: string;
    power = 100;
    constructor(name: string) {
        this.name = name
    }
    increasePower() {
        this.power = 100
    }
    decreasePower() {
        this.power -= 20
    }
}
class Oppoonent {
    name: string;
    power = 100;
    constructor(name: string) {
        this.name = name
    }
    increasePower() {
        this.power = 100
    }
    decreasePower() {
        this.power -= 20
    }
}
    let player = await inquirer.prompt(
        [
            {
                name: "name",
                type: "input",
                message: "What is your Hero name?"
            }
        ]
    )
    let oppoonent = await inquirer.prompt(
        [
            {
                name: "name",
                type: "list",
                message: "Seiect your opponent name:",
                choices: ["Zombie","Witch","Skeleton"]
            }
        ]
    )
    let p1 = new Player(player.name)
    let o1 = new Oppoonent(oppoonent.name)
    console.log(chalk.blueBright.bold(`${player.name} VS ${oppoonent.name}`))

    do{
        if (oppoonent.name == "Zombie"){ 
            let ask = await inquirer.prompt(
            [
                {
                    name: "action",
                    message: "What do you want to do?",
                    type: "list",
                    choices: ["Attack","Drink portion","Run"]
                }
            ]
        );
        if (ask.action == "Attack"){
            let number = Math.floor(Math.random() * 2)
            if (number > 0){
                p1.decreasePower()
                console.log(chalk.red.bold(`${p1.name} power : ${p1.power}`))
                console.log(chalk.green.bold(`${o1.name} power : ${o1.power}`))
                if (p1.power <= 0){
                    console.log(chalk.red.bold.italic("You lose, better luck next time...")) 
                    process.exit()
                }
            }
            if (number <= 0){
                o1.decreasePower()
                console.log(chalk.red.bold(`${o1.name} power : ${o1.power}`))
                console.log(chalk.green.bold(`${p1.name} power : ${p1.power}`))
                if (o1.power <= 0){
                    console.log(chalk.green.bold.italic(`"Congratulation, You Win the Adventure Game"`))
                    process.exit() 
                }
            }
        }
        if (ask.action == "Drink portion"){
            p1.increasePower()
            console.log(chalk.blueBright(`You drink health portion , your power is ${p1.power}`))
        }
        if (ask.action == "Run"){
           console.log(chalk.red.bold.italic("You lose, better luck next time..."))
           process.exit()
        }
    }
    if (oppoonent.name == "Witch"){ 
        let ask = await inquirer.prompt(
        [
            {
                name: "action",
                message: "What do you want to do?",
                type: "list",
                choices: ["Attack","Drink portion","Run"]
            }
        ]
    );
    if (ask.action == "Attack"){
        let number = Math.floor(Math.random() * 2)
        if (number > 0){
            p1.decreasePower()
            console.log(chalk.red.bold(`${p1.name} power : ${p1.power}`))
            console.log(chalk.green.bold(`${o1.name} power : ${o1.power}`))
            if (p1.power <= 0){
                console.log(chalk.red.bold.italic("You lose, better luck next time...")) 
                process.exit()
            }
        }
        if (number <= 0){
            o1.decreasePower()
            console.log(chalk.red.bold(`${o1.name} power : ${o1.power}`))
            console.log(chalk.green.bold(`${p1.name} power : ${p1.power}`))
            if (o1.power <= 0){
                console.log(chalk.green.bold.italic(`"Congratulation, You Win the Adventure Game"`))
                process.exit() 
            }
        }
    }
    if (ask.action == "Drink portion"){
        p1.increasePower()
        console.log(chalk.blueBright(`You drink health portion , your power is ${p1.power}`))
    }
    if (ask.action == "Run"){
       console.log(chalk.red.bold.italic("You lose, better luck next time..."))
       process.exit()
    }
}
if (oppoonent.name == "Skeleton"){ 
    let ask = await inquirer.prompt(
    [
        {
            name: "action",
            message: "What do you want to do?",
            type: "list",
            choices: ["Attack","Drink portion","Run"]
        }
    ]
);
if (ask.action == "Attack"){
    let number = Math.floor(Math.random() * 2)
    if (number > 0){
        p1.decreasePower()
        console.log(chalk.red.bold(`${p1.name} power : ${p1.power}`))
        console.log(chalk.green.bold(`${o1.name} power : ${o1.power}`))
        if (p1.power <= 0){
            console.log(chalk.red.bold.italic("You lose, better luck next time...")) 
            process.exit()
        }
    }
    if (number <= 0){
        o1.decreasePower()
        console.log(chalk.red.bold(`${o1.name} power : ${o1.power}`))
        console.log(chalk.green.bold(`${p1.name} power : ${p1.power}`))
        if (o1.power <= 0){
            console.log(chalk.green.bold.italic(`"Congratulation, You Win the Adventure Game."`))
            process.exit() 
        }
    }
}
if (ask.action == "Drink portion"){
    p1.increasePower()
    console.log(chalk.blueBright(`You drink health portion , your power is ${p1.power}`))
}
if (ask.action == "Run"){
   console.log(chalk.red.bold.italic("You lose, better luck next time..."))
   process.exit()
}
}
} while(true)
