import * as rl from 'readline-sync';

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