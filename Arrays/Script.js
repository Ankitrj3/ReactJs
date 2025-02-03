// let number = [12,23,12,34,3345,32,342];

// number.forEach((num)=>{
//     console.log(num);
// })

// number.forEach((item,index,array)=>{
//     console.log(index ,"=>", item+2);
// })

// let price = [20,10,220,100,1000,12,234,5,3];

// let FilteredPrice = price.filter((item)=>{
//     return item > 100;
// })
// console.log(FilteredPrice);

// const nums = [1,2,3,4,5,6,7,8,9,10];

// let FilteredEven = nums.filter((item)=>{
//     return item % 2 == 0;
// })
// console.log(FilteredEven);

// //map function in javascript
// const fruits = ['apple','banana','mango','orange','grapes'];

// const upperCaseFruits = fruits.map((fruit)=>{
//     return fruit.toUpperCase();
// })
// console.log(upperCaseFruits);

// const bikes = [
//     {
//         bikename: 'Royal Enfield',
//         price: 200000
//     },
//     {
//         bikename: 'Yamaha',
//         price: 150000
//     },
//     {
//         bikename: 'Honda',
//         price: 100000
//     },
//     {
//         bikename: 'KTM',
//         price: 350000
//     }
// ]
// const bikename = bikes.map((bike)=>{
//     return bike.bikename.toUpperCase();
// })
// console.log(bikename);

// const rawPrices = [22.4523,44.23,90.343231];

// const prices = rawPrices.map((price)=>{
//     return price.toFixed(2);
// })
// console.log(prices);

// //find function in javascript

// const student = [
//     { name: 'Ankit', age: 20, grade: 90 },
//     { name: 'Rahul', age: 22, grade: 78 },
//     { name: 'Rohit', age: 24, grade: 23 },
//     { name: 'ujjwal', age: 25, grade: 23 }
// ];

// const findStudent = student.find((student) => {
//     return student.grade > 50;
// });

// console.log(findStudent);

// //every function in javascript

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const isEven = numbers.every((num)=>{
//     return num % 2 == 0;
// })
// console.log(isEven);

// //sort
// const sortNumber = [1,2,3,4,5,6,7,8,9,10];  
// sortNumber.sort((a,b)=>{
//     return a-b;
// })
// console.log(sortNumber);


const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];

const sortedMovies = movies.sort((a,b)=>{
    return b.rating - a.rating;
})
console.log(sortedMovies);

const releaseYearBefore2000 = movies.filter((movie)=>{
    return movie.releaseYear < 2000;
})
console.log(releaseYearBefore2000);

const evenRating = movies.every((movie)=>{
    return movie.rating > 7;
})
console.log(evenRating);

const movieAfter2000 = movies.filter((movie)=>{
    return movie.releaseYear > 2000;
})
console.log(movieAfter2000);

const movieFilterOnTitle = movies.find((movie)=>{
    return movie.title === 'The Matrix';
    })

console.log(movieFilterOnTitle);

const movieWhoHaveRatingMoreThan8 = movies.map((movie)=>{
    return movie.rating > 8;
})

console.log(movieWhoHaveRatingMoreThan8);