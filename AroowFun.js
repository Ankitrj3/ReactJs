//this keyword is used to access the object properties and methods of the object
//this keyword will not work in the function which is not the part of object

let obj={
    name:"Rahul",
    age:25,
    display:function(){
        console.log(this.name);
        console.log(this.age);
    }
}
obj.display();

//Arrow function

let fun = ()=>{"Hello ANKIT"};
console.log(fun());

//reverse a string
const reverseString = (str)=>{
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));