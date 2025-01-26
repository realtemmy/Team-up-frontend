import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatTime = (isoDate, useUTC = false) => {
  if (!isoDate) return ""; // Handle cases where isoDate is undefined or null

  const date = new Date(isoDate);

  const hours = useUTC
    ? date.getUTCHours().toString().padStart(2, "0")
    : date.getHours().toString().padStart(2, "0");

  const minutes = useUTC
    ? date.getUTCMinutes().toString().padStart(2, "0")
    : date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

