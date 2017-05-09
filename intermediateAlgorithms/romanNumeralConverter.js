function convertToRoman(num) {
  // Rules for Roman numerals
  // 1. When a symbol appears after a larger symbol it is added
  // 2. But if the symbol appears before a larger symbol it is subtracted
  // 3. Don't use the same symbol more than three times in a row
  var romanVal = [];
  var reduceVal = num;
  
  // work backwards from 1000 to determine the first roman numeral to use
  var numThousands = Math.floor(reduceVal / 1000);
  reduceVal -= (numThousands * 1000);
  var numHundreds = Math.floor(reduceVal / 100);
  reduceVal -= (numHundreds * 100);
  var numTens = Math.floor(reduceVal / 10);
  reduceVal -= (numTens * 10);
  var numOnes = reduceVal;
  reduceVal -= reduceVal;
  
  var i = 0; // counter variable
  
  // Thousands
  if (numThousands > 0) {
    for (i = 0; i < numThousands; i++) {
      romanVal.push('M');
    }
  }
  
  // Hundreds
  switch (numHundreds >= 5) {
    case true:
      if (numHundreds > 8) {
        romanVal.push('CM');
      } else {
        romanVal.push('D');
        for (i = 0; i < (numHundreds - 5); i++) {
          romanVal.push('C');
        }
      }
      break;
    case false:
      if (numHundreds > 3) {
        romanVal.push('CD');
      } else {
        for (i = 0; i < numHundreds; i++) {
          romanVal.push('C');
        }
      }
      break;
  }
  
  // Tens
  switch (numTens >= 5) {
    case true:
      if (numTens > 8) {
        romanVal.push('XC');
      } else {
        romanVal.push('L');
        for (i = 0; i < (numTens - 5); i++) {
          romanVal.push('X');
        }
      }
      break;
    case false:
      if (numTens > 3) {
        romanVal.push('XL');
      } else {
        for (i = 0; i < numTens; i++) {
          romanVal.push('X');
        }
      }
      break;
  }
  
  // Ones
  switch (numOnes >= 5) {
    case true:
      if (numOnes > 8) {
        romanVal.push('IX');
      } else {
        romanVal.push('V');
        for (i = 0; i < (numOnes - 5); i++) {
          romanVal.push('I');
        }
      }
      break;
    case false:
      if (numOnes > 3) {
        romanVal.push('IV');
      } else {
        for (i = 0; i < numOnes; i++) {
          romanVal.push('I');
        }
      }
      break;
  }
  
  // Use join to flatten array to a string value for return statement
  return romanVal.join('');
}
