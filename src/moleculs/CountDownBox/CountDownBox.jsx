import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import CountDownCard from "../../atoms/CountdownCard/CountdownCard";
import CardText from "../../atoms/CardText/CardText";

const CountDownBox = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Handle countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("2024-12-31T23:59:59");
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-x-8 items-center mt-12 px-5">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <motion.div
          key={unit + timeLeft[unit]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center flex-shrink-0 w-24 sm:w-32 md:w-40 max-w-xs"
        >
          <CountDownCard text={timeLeft[unit]} />
          <CardText text={unit} />
        </motion.div>
      ))}
    </div>
  );
};

export default CountDownBox;
