import React from "react";
import "./navbar.css";
import AlgoData from "../utils/AlgoData";

const Navbar = ({ renderBars, setCurrentAlgo }) => {
  // get select value.
  const changeHandler = (id) => {
    const data = AlgoData.filter((algo) => {
      return algo.id == id;
    });
    setCurrentAlgo(data[0]);
  };

  return (
    <div className="navbar">
      <p id="appName">Sorting Visualizer 📊 </p>
      <div className="navbar-right">
        <button
          id="randombar"
          onClick={() => {
            renderBars();
          }}
        >
          Random Bars
        </button>
        <div>
          <select
            className="algo-list"
            onChange={(e) => {
              changeHandler(e.target.value);
            }}
          >
            <option value="0">Select Algorithm</option>
            <option value="1">Bubble Sort</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
