function rot13(str) { // LBH QVQ VG!
  // Strings are immutable so we have to build a new string to return
  var decodedStr = "";
  
  /* ASCII codes */
  // A: 65
  // Z: 90
  // a: 97
  // z: 122
  // Since we convert to all uppercase, we care about values from 65-90 inclusive
  
  // Loop through str
  for (var i = 0; i < str.length; i++) {
    // If ASCII code is less than 65 ('A') or greated than 90 ('Z'), we just return that value
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      decodedStr += str[i];
    // Otherwise, determine whether we need to rotate forward or backward in alphabet
    } else {
      // If the character is between A and M, add 13 to the character's ASCII code
      if (str.charCodeAt(i) < 78) {
        decodedStr += String.fromCharCode(str.charCodeAt(i) + 13);
      // If the character is between N and Z, subtract 13 from the character's ASCII code
      } else {
        decodedStr += String.fromCharCode(str.charCodeAt(i) - 13);
      }
    }
  }
  return decodedStr;
}
