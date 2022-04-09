import React from "react";
import "./navbar.css";
import AlgoData from "../utils/AlgoData";

const Navbar = ({ renderBars, setCurrentAlgo, disableButton, setBars }) => {
  // get selected sorting algo id.
  const changeHandler = (id) => {
    const data = AlgoData.filter((algo) => {
      return algo.id == id;
    });
    setTimeout(() => {
      setCurrentAlgo("");
      setCurrentAlgo(data[0]);
    }, 1);
  };

  // get selected bars value.
  const changeBarsHandler = (val) => {
    setBars(parseInt(val));
  };

  return (
    <div className="navbar">
      <p id="appName">Sorting Visualizer 📶 </p>
      <div className="navbar-right">
        <button
          id="randombar"
          disabled={disableButton}
          onClick={() => {
            renderBars();
          }}
        >
          Generate Bars
        </button>
        <div>
          <select
            className="algo-list"
            disabled={disableButton}
            placeholder="Random"
            onChange={(e) => {
              changeBarsHandler(e.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <select
            className="algo-list"
            disabled={disableButton}
            onChange={(e) => {
              changeHandler(e.target.value);
            }}
          >
            <option value="0">Select Algorithm</option>
            <option value="1">Bubble Sort</option>
            <option value="2">Insertion Sort</option>
            <option value="3">Selection Sort</option>
            <option value="4">Ford</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
