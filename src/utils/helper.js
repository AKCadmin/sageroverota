// src/utils/helpers.ts

// Capitalize the first letter of a string
export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

// Format a date to local string
export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString();


// duration extraction from json
export const extractFormattedNights = (destinationAndNights) => {
  try {
    const parsed = JSON.parse(destinationAndNights);
    if (!Array.isArray(parsed) || parsed.length === 0) return "";

    // Get the first two items only
    const firstTwo = parsed.slice(0, 2).map(item => parseInt(item.number_of_nights, 10));

    if (firstTwo.length === 1) {
      return `${firstTwo[0]}D`; // Only one item, assume D
    }

    const [a, b] = firstTwo;
    if (a === b) {
      return `${a}D/${b}N`; // Both are same, just return both with suffix
    }

    const lesser = Math.min(a, b);
    const greater = Math.max(a, b);
    return `${lesser}D/${greater}N`;
  } catch (error) {
    console.error("Invalid JSON in destination_and_no_of_nights", error);
    return "";
  }
};
