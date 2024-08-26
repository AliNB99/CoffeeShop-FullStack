import { sp } from "@/utils/helper/replaceNumber";
import { useState, useEffect } from "react";

const CountUp = ({ start = 0, end, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);
  }, [start, end, duration, delay]);

  return <span>{sp(count)}</span>;
};

export default CountUp;
