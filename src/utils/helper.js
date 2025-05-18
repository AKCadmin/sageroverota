// src/utils/helpers.ts

// Capitalize the first letter of a string
export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

// Format a date to local string
export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString();
