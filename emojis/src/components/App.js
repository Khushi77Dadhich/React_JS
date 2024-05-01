import React from "react";
import Entry from "./Entry";
import Emojipedia from "../Emojipedia";

functiom
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
