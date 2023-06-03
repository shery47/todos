#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet"

//welcome
console.log(figlet.textSync("Welcome to Todo List"));

let todos: string[] = [];
let loop = true;

while(loop){
    const answers : {
        TODO: string,
        addMore: boolean,
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more",
            default: false,
        }
    ])
    const {TODO, addMore} = answers;
    console.log(answers)
    loop = addMore
    if (TODO){
        todos.push(TODO)
    }   
    else{
        console.log("Kindly add valid input")
    }
}
//console.log(todos);

if ( todos.length>0){
    console.log("Your Todo's List:")
    todos.forEach(todo =>{
        console.log(todo)
    });
}else{
    console.log("No Todos Found!")
}
