// utils/formatDate.js

/**
 * Formats a JavaScript Date object into a string of format MM/DD/YYYY H:M:S
 * @param {Date} date - The date object to format
 * @returns {string} - The formatted date string
 */
const formatDate = (date) => {
    const pad = (num) => num.toString().padStart(2, '0');
  
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();
  
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
  
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  };
  
  export default formatDate;
  