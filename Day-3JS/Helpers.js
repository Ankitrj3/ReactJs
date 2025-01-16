// Helpers in javascript refers to small reusable functions that can 
// be used in multiple places in the codebase.

// Example of a helper function
// Array Methods
// 1. filter
// 2. map
// 3. reduce
// 4. forEach
// 5. find
// 6. some
// 7. join and many more
function foreach(arr){
    for(const elem of arr){
        console.log(elem);
    }
}
const name1 = ["Ankit","Ranjan","Kumar","Sinha","Ujjwal"];
name1.forEach(function(name){
    console.log(name);
})
name1.forEach((name)=>console.log(name));



// Example of a helper function
// String Methods
// 1. toUpperCase
// 2. toLowerCase
// 3. split
// 4. slice
// 5. substring
// 6. substr
// 7. replace
// 8. trim
// 9. charAt and many more
