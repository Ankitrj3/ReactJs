//Synk program

// console.log("Hello World");
// console.log("Hello World1");
// console.log("Hello World2");

//synk program used to run program in sequence and it will wait for 
//the previous line to execute first then it will execute the next line.

//Asynchronous program
// console.log("Hello World");
// setTimeout(()=>{
//     console.log("Hello World1");
// },4000);
// console.log("Hello World2");


// async await function

async function asyncFunction(){
    try{
    let api =  await fetch("https://dummy-json.mock.beeceptor.com/posts");
    let data = await api.json();
    console.log(data);
    }catch(err){
        console.log(err);
    }
    // alert(data);
}
async function main(){
const wait = await asyncFunction();
console.log("Hello World");
console.log("Hello World1");
}

main();