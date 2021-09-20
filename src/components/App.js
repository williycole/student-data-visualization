/*eslint-disable*/
import React, { useContext, useState, useEffect, createContext } from "react";
import Graphs from "./Graphs";

function App() {
  return (
    <div className="App" className="bg-secondary">
      <main
        className="App-header"
        className="bg-secondary h-full overflow-hidden "
      >
        <Graphs data-testid="graph" />
      </main>
    </div>
  );
}

export default App;
