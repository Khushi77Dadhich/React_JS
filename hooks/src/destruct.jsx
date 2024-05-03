import animals from "./animal";

// //destructing an array
// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

//desturcting objects
const {name, sound} = cat;
const {name: catName, sound: catsound} = cat;
const {feedingRequirement: {food, water}} = cat;
console.log(food);

