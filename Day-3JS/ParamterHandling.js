// default parameter
function multiply(a,b=1){ // b=1 is default parameter
    return a*b;
}

console.log(multiply(5));

function fun(a=2,b=3){
    return a+b;
}
let res = fun(5,6);
console.log(res);

let res1 = fun();
console.log(res1);//5

function func2(a,b=3,c=47){
    return a+b+c;
}
let res2 = func2(5,undefined,null);
console.log(res2);//52
//undefined is used to take default value -> no value
//null is used to take null value -> it is empty value 0

// Rest parameter
// A function to accept any number of arguments in the form of an array

function restPrameter(a,b,...c){
    console.log({a,b,c});
}

restPrameter(1,2,3,4,5,6,7,8,9,10,"Ankit","Ranjan");

function sum(...args){
    let sum = 0;
    for(const i of args){
        sum+=i;
    }
    return sum;
}
console.log(sum(1,2,3));

function myfun(a,b,...args){
    console.log("a:",a);
    console.log("b:",b);
    console.log("args:",args);
}
myfun(1,2,3,4,5,6,7,8,9,10);

// Spread operator
// the javascript spread operator(...) allows us to quickly copy all or part 
// of an existing array or object into another array or object
// used to combine the elements of an array or object in a new array or object

const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9,10];
const arr2 = [...arr,...arr1];
console.log(arr2);

