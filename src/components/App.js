/*eslint-disable*/
import React, { useContext, useState, useEffect, createContext } from "react";
import GraphParams from "./GraphParams";

function App() {
  return (
    <div className="App" className="bg-purple-900">
      <main className="App-header" className="bg-purple-900 h-full">
        <GraphParams />
      </main>
    </div>
  );
}

export default App;
