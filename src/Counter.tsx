import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); //making useState for count

  const handleIncrement = () => {
    //handling increment by adding 1 to count
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    //handling decrement by subtracting 1 from count if count is greater than 0
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    //handling reset by setting count to 0
    setCount(0);
  };

  return (
    <div className="counter-container">
      <motion.div
        className="count-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {count}
      </motion.div>
      <motion.button
        className="btn"
        onClick={handleIncrement}
        whileHover={{ scale: 1.1 }}
      >
        Increment
      </motion.button>

      <motion.button
        className="btn"
        onClick={handleDecrement}
        whileHover={{ scale: 1.1 }}
      >
        Decrement
      </motion.button>

      <motion.button
        className="btn reset"
        onClick={handleReset}
        whileHover={{ scale: 1.1 }}
      >
        Reset
      </motion.button>
    </div>
  );
};

export default Counter;
