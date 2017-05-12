function translatePigLatin(str) {
  var splitStr = str.split("");
  var holder = [];
  var returnStr = [];
  var i = 0;
  
  while (splitStr[i].indexOf('a') === -1 && splitStr[i].indexOf('e') === -1 && splitStr[i].indexOf('i') === -1 && splitStr[i].indexOf('o') === -1 && splitStr[i].indexOf('u') === -1) {
    holder.push(splitStr[i]);
    i++;
  }
  
  if (holder.length === 0) {
    returnStr.push(splitStr.join(""));
    returnStr.push('way');
  } else {
    returnStr.push(str.substr(i));
    returnStr.push(holder.join(""));
    returnStr.push('ay');
  }
  return returnStr.join("");
}
