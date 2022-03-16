import React from "react";
import "./algoinfo.css";

const AlgoInfo = ({ currentAlgo }) => {
  return (
    <div className="algoContainer">
      {currentAlgo ? (
        <>
          <p id="algotitle">{currentAlgo && currentAlgo.name}</p>
          <div className="algoInner">
            <p>{currentAlgo.details}</p>
            <div className="verticalBar"></div>
            <div>
              <p id="algotitle" style={{ marginBottom: "10px" }}>
                Performance:
              </p>
              <p>Worst-case Time Complexity &nbsp; {currentAlgo.worstCase}</p>
              <p>Best-case Time Complexity &nbsp; {currentAlgo.bestCase}</p>
              <p>
                Worst-case Space Complexity &nbsp; {currentAlgo.spaceComplexity}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p id="algoNotification">Please select a sorting algorithm</p>
        </div>
      )}
    </div>
  );
};

export default AlgoInfo;
