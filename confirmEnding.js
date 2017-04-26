function confirmEnding(str, target) {
  if (target === str.substr(str.length - target.length, target.length)) {
    return true;
  } else {
    return false;
  }
}
