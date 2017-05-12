function pairElement(str) {
  var dna = str.split("");
  var returnArray = [];
  for (var i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        returnArray.push([dna[i], 'T']);
        break;
      case 'T':
        returnArray.push([dna[i], 'A']);
        break;
      case 'C':
        returnArray.push([dna[i], 'G']);
        break;
      case 'G':
        returnArray.push([dna[i], 'C']);
        break;
    }
  }
  
  return returnArray;
}
