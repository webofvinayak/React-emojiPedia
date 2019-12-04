import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function listEntry(emo) {
  return (
    <Entry
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      

      <dl className="dictionary">
      
      {emojipedia.map(listEntry)}
      {emojipedia.map(listEntry)}
      {emojipedia.map(listEntry)}
      {emojipedia.map(listEntry)}
      {emojipedia.map(listEntry)}
        
      </dl>
    </div>
  );
}

export default App;
