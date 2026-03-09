import * as rl from 'readline-sync';
import {mug, manufacturer} from "./mugs_interfaces";


console.log("Welcome to the JSON data viewer!");

let mainMenu: string[] = ["View all data", "Filter by ID", "Exit"];

let choosenMenuItem: number = rl.keyInSelect(
    mainMenu,
    "Give me a number: ",
    {cancel: false}
);

console.log(`You choose ${mainMenu[choosenMenuItem]}`);


if(choosenMenuItem == 1){
    // view all data

}else if(choosenMenuItem == 2){
    // filter by ID
    async function fetchMugs(): Promise<>{
        try{
            const mugsResponse = await fetch("https://raw.githubusercontent.com/Abdulkuddus2000/json-data-mugs/refs/heads/main/mugs.json")
            
            if(mugsResponse.status === 404) throw new Error('No mug found');
            if(mugsResponse.status === 500) throw new Error('Internar server error');

            const mugs: Mug[] = await mugsResponse.json();
            console.log(mugs[0].name);
        }catch(error: any){
            console.log(error);
        }
    }
    // const responseManufacturers = await fetch("https://raw.githubusercontent.com/Abdulkuddus2000/json-data-mugs/refs/heads/main/manufacturers.json")
    
}else{
    // exit, wderkt nog niet

    async function exitFunction(){
        const exitPromise: Promise<void> = new Promise((resolve) => {
            setTimeout(() => {
                console.log();("Program is going to exit...");
                resolve();
            }, 1000);
        });

        process.exit(0); // voorkomen dat Node direct afsluit
    }

    exitFunction();


    // console.log("Program is going to exit.");
}



export {}