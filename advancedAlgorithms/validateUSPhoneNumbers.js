function telephoneCheck(str) {
  if (str.match(/^(1(?=\s?\(\d{3}\)|\s\d{3}))?\s?(?:\(\d{3}\)|\d{3})(?:-|\s)?\d{3}(?:-|\s)?\d{4}$/igm)) {
    return true;
  } else {
    return false;
  }
}
