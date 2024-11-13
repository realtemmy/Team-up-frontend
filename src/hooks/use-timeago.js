import { useState, useEffect } from "react";

function useTimeAgo(date) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    function calculateTimeAgo() {
      const now = new Date();
      const seconds = Math.floor((now - new Date(date)) / 1000);

      const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
      ];

      for (let interval of intervals) {
        const time = Math.floor(seconds / interval.seconds);
        if (time > 1) {
          return `${time} ${interval.label}s ago`;
        }
        if (time === 1) {
          return `1 ${interval.label} ago`;
        }
      }

      return "just now";
    }

    setTimeAgo(calculateTimeAgo());

    // Update every minute to keep the time ago string accurate
    const intervalId = setInterval(() => {
      setTimeAgo(calculateTimeAgo());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [date]);

  return timeAgo;
}

export default useTimeAgo;
