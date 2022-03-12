import React from "react";
import "./bars.css";

const Bars = ({ bars, array, arraySwap }) => {
  return (
    <div className="barContainer">
      {array.map((arr, key) => {
        return (
          <div
            className="bar"
            key={key}
            style={{
              height: `${arr}rem`,
              backgroundColor: arraySwap.includes(key) ? "#66bb6a" : "white",
              textAlign: "center",
              position: "relative",
              width: "6%",
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
