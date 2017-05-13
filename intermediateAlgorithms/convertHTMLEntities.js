function convertHTML(str) {  
  var newString = str.replace(/\W/g, function(val) {
      switch (val) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&apos;';
        default:
          return val;
      }
    });
  return newString;
}
