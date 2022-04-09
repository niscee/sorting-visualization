import React from "react";
import "./algoinfo.css";
import { motion } from "framer-motion";

const AlgoInfo = ({ currentAlgo }) => {
  return (
    <div className="algoContainer">
      {currentAlgo ? (
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        >
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
        </motion.div>
      ) : (
        <div>
          <p id="algoNotification">Please Select Any One Algorithm!!</p>
        </div>
      )}
    </div>
  );
};

export default AlgoInfo;
