// validate.js

function validateKey(inputKey) {
  if (inputKey.length >= 2) {
    return true;
  } else {
    console.warn("Name must be at least 2 characters long.");
    return false;
  }
}

function validateVal(inputVal) {
  if (inputVal.length != 0) {
    return true;
  } else {
    console.warn("Secret can't be empty.");
    return false;
  }
}

export { validateKey, validateVal };
