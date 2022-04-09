import React from "react";
import { motion } from "framer-motion";

const KeyBar = ({ arr, id, arraySwap, arrayCompare, keyVal }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="bar"
      key={id}
      style={{
        height: `${arr}rem`,
        backgroundColor: arrayCompare.includes(id) ? arraySwap : "white",
        textAlign: "center",
        position: "relative",
        width: window.innerWidth > 768 ? "100%" : "3%",
        margin: window.innerWidth > 768 && "0 5px",
        border: keyVal == id ? "6px solid lime" : "1px solid #3a3a3c",
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

export default KeyBar;
