import * as rl from 'readline-sync';
import data from "./mugs.json";
import type { Mug } from "./mugs_interfaces";

let mugs: Mug[] = data as Mug[];
let mainMenu: string[] = ["view all data", "filter by ID", "exit"];

console.log("Welcome to the JSON data viewer!");

let running: boolean = true;

do{
    let choosenMenuItem: number = rl.keyInSelect(
        mainMenu,
        "Give me a number: "
    );

    console.log(`You choose to ${mainMenu[choosenMenuItem]}`);

    if(choosenMenuItem == 0){
        // view all data     
        mugs.forEach(mug =>{
            console.log(`${mug.id} - ${mug.name}`);
        });

    }else if(choosenMenuItem == 1){
        // filter by ID
        const searchId: number =  rl.questionInt("Enter ID you want to filter by: ");
        const foundMug = mugs.find(mug => mug.id === searchId);
        
        if (foundMug){
            console.log();
            console.log(`ID: ${foundMug.id}`);
            console.log(`Name: ${foundMug.name}`);
            console.log(`Description: ${foundMug.description}`);
            console.log(`Price: ${foundMug.price}`);
            console.log(`Is in stock: ${foundMug.inStock}`);
            console.log(`Release date: ${foundMug.releaseDate}`);
            console.log(`Image: ${foundMug.image}`);
            console.log(`Type: ${foundMug.type}`);
            console.log(`Tags: ${foundMug.tags}`);
            console.log(`Manufacturer: ${foundMug.manufacturer}`);
            console.log();
        }
    }

    else{
        running = false;
        process.exit(0);
    }
        
}while(running);



export {}