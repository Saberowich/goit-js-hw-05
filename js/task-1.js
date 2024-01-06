// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }
//   makeMessage("Royal Grand", makePizza);
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`);
// });
// function each(array, callback){
//   const result = [];
//   for (const number of array){
//    const newNumber = callback(number);
//    result.push(newNumber);
//   }
//   return result;
// };

// console.log(
//   each( [64,49,36,25,16], function(value){
//     console.log(value);
//   return value * 2;
// })
// );
// console.log(
//   each( [64,49,36,25,16], function(value){
//     console.log(value);
//   return value - 10;
// })
// );
// console.log(
//   each( [64,49,36,25,16], function(value){
//     console.log(value);
//   return Math.sqrt(value);
// })
// );
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number, index){
//     totalPrice += number;
//   }
//   );

//   return totalPrice;
// }
// function filterArray(numbers, value) {
//   let result = [];
//   numbers.forEach(function(number){
//     if (value < number){
//       result.push(number);
//     } 
   
//   })
//   return result;
// }
// function changeEven(numbers, value) {
//   let newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value) ;
//     }
//     else {newNumbers.push(numbers[i])};
//   }
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
  
//   const names = books
  
//   .filter(book => book.rating > MIN_BOOK_RATING) 
//   .map(book => book.author)
//   .toSorted((book1,book2) => book1.localeCompare(book2));
const getUserNames = (users) => {
    const allUsersName = users.map(user => user.name);

    return allUsersName;

}
console.log(
    getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
  ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
  
