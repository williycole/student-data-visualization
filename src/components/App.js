/*eslint-disable*/
import React, { useContext, useState, useEffect, createContext } from "react";
import GraphSetOne from "./GraphSetOne";

function App() {
  return (
    <div className="App" className="bg-secondary">
      <main
        className="App-header"
        className="bg-secondary h-full overflow-hidden "
      >
        <GraphSetOne />
      </main>
    </div>
  );
}

export default App;
