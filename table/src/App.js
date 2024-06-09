// // import { SplitScreen } from "./Component/SplitScreen";
// // import react from 'react';
// // const leftHandComponent = () => {
// //   return(
// //     <h1>Left!</h1>
// //   )
// // }
// // const rightHandComponent = () => {
// //   return(
// //     <h1>Left!</h1>
// //   )
// // }

// function App() {
//   return (
//     // <SplitScreen 
//     //     left={leftHandComponent}
//     //     right={rightHandComponent}
//     // />
//   );
// }

// export default App;



const person = [{
  name: 'khushi',
  age: 27,
  hairColor: 'black',
  hobbies: ['drawing', 'dancing'],
},
{
  name: 'khushi',
  age: 27,
  hairColor: 'black',
  hobbies: ['drawing', 'dancing'], 
},
{
  name: 'khushi',
  age: 27,
  hairColor: 'black',
  hobbies: ['drawing', 'dancing'],
},
];
const product = [{
  name: 'tv',
  price: '$3345',
  description: 'it is a tv',
  rating: 4.5,
},
{
  name: 'tv',
  price: '$3345',
  description: 'it is a tv',
  rating: 4.5,
},
{
  name: 'tv',
  price: '$3345',
  description: 'it is a tv',
  rating: 4.5,
},
{
  name: 'tv',
  price: '$3345',
  description: 'it is a tv',
  rating: 4.5,
},
];

function App() {
  return(
    <RegularList
      items={people}
      resourse
    />
  );
}

export default App;


