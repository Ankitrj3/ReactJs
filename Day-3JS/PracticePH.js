// Write a function calculateDiscount that takes two
// parameters: price and discount (with a default value of 10). The function should
// return the final price after applying the discount.
function calculateDiscount(price, discount){
    let dis = (price*discount)/100;
    return price-dis;
}
console.log(calculateDiscount(1000,10));

// Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator.

function MergeArray(arr1,arr2){
    return [...arr1,...arr2];
}
console.log(MergeArray([1,2,3,4,5],[6,7,8,9,10]));

// Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments.
function logArgument(...args){
    console.log(args);
}
logArgument(1,2,3,4,5,6,7,8,9,10);

// Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for
// each name.
function createMessage(message,...names){
    for(const name of names){
        console.log(`${message} ${name}`);
    }
}
createMessage("Hello","Ankit","Ranjan","Kumar","Sinha","ujjwal");

// Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers.
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...[1,2,3]));

// Write a function createUserProfile that takes three
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown").
// Return an object with these properties.

function createUserProfile(username,age=25,country="Unknown"){
    return {
        "username":username,
        "age":age,
        "country":country
    }
}

console.log(createUserProfile("Ankit",24,"India"));
console.log(createUserProfile("Ranjan",undefined,"null"));
console.log(createUserProfile("Kumar",null));