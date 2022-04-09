import React from "react";
import { motion } from "framer-motion";

const AllBar = ({ arr, key, arraySwap, arrayCompare, keyVal }) => {
  return (
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
        border: keyVal == key ? "6px solid lime" : "lightblue",
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
};

export default AllBar;
