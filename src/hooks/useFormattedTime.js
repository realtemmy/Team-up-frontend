import { useMemo } from "react";

const useFormattedTime = (isoDate, useUTC = false) => {
  const formattedTime = useMemo(() => {
    if (!isoDate) return ""; // Handle cases where isoDate is undefined or null

    const date = new Date(isoDate);

    const hours = useUTC
      ? date.getUTCHours().toString().padStart(2, "0")
      : date.getHours().toString().padStart(2, "0");

    const minutes = useUTC
      ? date.getUTCMinutes().toString().padStart(2, "0")
      : date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }, [isoDate, useUTC]);

  return formattedTime;
};

export default useFormattedTime;
