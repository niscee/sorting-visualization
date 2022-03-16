import React from "react";
import "./bars.css";

const changeBarColor = (arrayCompare, arraySwap, key) => {
  if (arrayCompare) {
    if (arrayCompare.includes(key)) {
      return "#66bb6a";
    }
    return "white";
  }

  if (!arrayCompare) {
    if (arraySwap && arraySwap.includes(key)) {
      return "red";
    }
    return "white";
  }
};

const Bars = ({ bars, array, arraySwap, arrayCompare }) => {
  return (
    <div className="barContainer">
      {array.map((arr, key) => {
        return (
          <div
            className="bar"
            key={key}
            style={{
              height: `${arr}rem`,
              backgroundColor: changeBarColor(arrayCompare, arraySwap, key),
              textAlign: "center",
              position: "relative",
              width: "8%",
            }}
          >
            {window.innerWidth > 768 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                }}
              >
                <p>{arr}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Bars;
