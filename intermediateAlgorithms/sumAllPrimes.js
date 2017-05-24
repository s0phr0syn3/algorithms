function sumPrimes(num) {
  var primes = [];
  // Start looping at 2 since 1 by itself is not prime
  for (var i = 2; i <= num; i++) {
    // 2 and 3 are known primes, no need to loop
    if (i === 2 || i === 3) {
      primes.push(i);
    } else {
      var isPrime = true;
      // brute force test to see if i is divisible by any previously discovered prime numbers - inefficient for large values of num
      for (var j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
  }
  // Returns 0 if num is less than 1, otherwise sums values in primes array via reduce() 
  return (num <= 1 || primes.length === 0) ? 0 : primes.reduce(function(acc, val) {
    return acc + val;
  });  
}
