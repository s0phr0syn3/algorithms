function sumFibs(num) {
    // If num is 1, return 1 (no need to loop)
    if (num === 1) {
      return 1;
    } else {
      var prev = 1;
      var curr = 1;
      var next = prev + curr;
      // Sum starts at 1 since if we have 2 or more Fibonacci values to evaluate, we already know the first value (1) gets included every time
      var sum = 1;
      // Loop to see if sum should be increased
      // As long as the current Fibonacci value is less than or equal to num, check the value for oddness
      while (curr <= num) {
        // If current value is odd, add it to sum
        if (curr % 2 !== 0) {
          sum += curr;
        }
        // Increase next to (curr + prev)
        next = curr + prev;
        // Set prev to curr
        prev = curr;
        // Set curr to next (increments the while loop)
        curr = next;
      }
      // Return the value of sum
      return sum;
    }
}
