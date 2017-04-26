function truncateString(str, num) {
  // If num is greater than or equal to str.length, no truncation needed
  if (num >= str.length) {
    return str;
  // Otherwise, determine how to truncate
  } else {
    // If num is less than 3, return the number of characters specified then append ...
    if (num <= 3) {
      return str.substr(0, num) + "...";
    // Otherwise, the ... gets included in the number of characters to return
    } else {
      return str.substr(0, num - 3) + "...";
    }
  }
}
