function spinalCase(str) {
  return str.replace(/(\s|_|-)|([a-z](?=[A-Z]))/g, function(match, p1, p2) {
    if (p1) {return '-';}
    if (p2) {return match + '-';}
  }).toLowerCase();
}
