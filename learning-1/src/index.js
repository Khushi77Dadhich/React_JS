// import App from './App';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App/>);