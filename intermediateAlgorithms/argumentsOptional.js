function addTogether() {
  var args = Array.from(arguments);
  for (var i = 0; i < args.length; i++) {
    if ((typeof args[i]) !== 'number') {
      return undefined;
    }
  }
  if (args.length === 2) {
    return args[0] + args[1];
  } else {
    return function (val) {
      if (typeof val !== 'number') {
        return undefined;
      } else {
        return args[0] + val;      
      }
    };
  }
}
