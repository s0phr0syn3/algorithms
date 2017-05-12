function fearNotLetter(str) {
  var i = 0;
  var missingChar = '';
  while (str.charCodeAt(i) === str.charCodeAt(i+1) - 1) {
    i++;
  }
  if (i === str.length - 1) {
    return undefined;
  } else {
    return String.fromCharCode(str.charCodeAt(i) + 1);
  }
}
