// import './App.css';
// import { useState } from "react";

// const content = [
//   [
//     "React is extremely popular",
//     "It makes building complex, interactive UIs a breeze",
//     "It's powerful & flexible",
//     "It has a very active and versatile ecosystem"
//   ],
//   [
//     "Components, JSX & Props",
//     "State",
//     "Hooks (e.g., useEffect())",
//     "Dynamic rendering"
//   ],
//   [
//     "Official web page (react.dev)",
//     "Next.js (Fullstack framework)",
//     "React Native (build native mobile apps with React)"
//   ],
//   [
//     "Vanilla JavaScript requires imperative programming",
//     "Imperative Programming: You define all the steps needed to achieve a result",
//     "React on the other hand embraces declarative programming",
//     "With React, you define the goal and React figures out how to get there"
//   ]
// ];

// function App() {
//   const [activeContentIndex, setActiveContentIndex] = useState(0);
//   return (
//     <div>
//       <header>
//         <div>
//           <h1>React</h1>
//         </div>
//       </header>
//       <div id="tabs">
//         <menu>
//         <button
//             className={activeContentIndex === 0 ? "active" : ""}
//             onClick={() => setActiveContentIndex(0)}
//           >
//             Why React?
//           </button>
//           <button
//             className={activeContentIndex === 1 ? "active" : ""}
//             onClick={() => setActiveContentIndex(1)}
//           >
//             Core Features
//           </button>
//           <button
//             className={activeContentIndex === 2 ? "active" : ""}
//             onClick={() => setActiveContentIndex(2)}
//           >
//             Related Resources
//           </button>
//           <button
//             className={activeContentIndex === 3 ? "active" : ""}
//             onClick={() => setActiveContentIndex(3)}
//           >
//             Related Resources
//           </button>
//         </menu>
//         <div>
//           <ul>
//             {content[activeContentIndex].map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ['fundamental', 'Cucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)]
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized tom" />
        <h1>React Essentails</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return(
    <div>
      <Header/>
      <main>
        <section id="core-concept"/>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          />
        </ul>
      </main>
    </div>
  );
}

export default App;