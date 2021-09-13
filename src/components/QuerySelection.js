import { useEffect, useState } from "react";

const QuerySelection = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:justify-around w-full">
      <div className="flex flex-row justify-center text-center p-1">
        <label htmlFor="data" className="p-1">
          Choose Data
        </label>
        <select name="data" className="text-center bg-red-200">
          <option>Internet Access</option>
          <option>Past Failures</option>
          <option>Study Time</option>
          <option>Number of Absences</option>
          <option>Overall Student Grade Health</option>
        </select>
      </div>
      <div className="flex flex-row justify-center text-center p-1">
        <label htmlFor="graph" className="p-1">
          Choose Graph
        </label>
        <select name="graph" className="text-center bg-red-200">
          <option>chart 1</option>
          <option>chart 2</option>
          <option>chart 3</option>
          <option>chart 4</option>
          <option>chart 5</option>
        </select>
      </div>
    </div>
  );
};

export default QuerySelection;
