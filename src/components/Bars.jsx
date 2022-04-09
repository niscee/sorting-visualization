import React from "react";
import "./bars.css";
import { motion } from "framer-motion";

const Bars = ({ bars, array, arraySwap, arrayCompare, keyVal }) => {
  return (
    <div className="barContainer">
      {array.map((arr, key) => {
        return arrayCompare[0] === key || arrayCompare[1] === key ? (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 0.2 }}
            className="bar"
            key={key}
            style={{
              height: `${arr}rem`,
              backgroundColor: arrayCompare.includes(key) ? arraySwap : "white",
              textAlign: "center",
              position: "relative",
              width: window.innerWidth > 768 ? "100%" : "3%",
              margin: window.innerWidth > 768 && "0 5px",
              border: keyVal == key ? "6px solid blue" : "1px solid black",
              // width: "8%",
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
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bar"
            key={key}
            style={{
              height: `${arr}rem`,
              backgroundColor: arrayCompare.includes(key) ? arraySwap : "white",
              textAlign: "center",
              position: "relative",
              width: window.innerWidth > 768 ? "100%" : "3%",
              margin: window.innerWidth > 768 && "0 5px",
              border: keyVal == key ? "6px solid blue" : "1px solid black",
              // width: "8%",
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default Bars;
