// index.js

import { setVault, getVault } from "vault.js";

function set(inputKey, secretVal) {
  if (validateKey(keyName) && validateVal(secretVal)) {
    setVault(inputKey, secretVal);
  }
}

function get(inputKey) {
  if (validateKey(keyName)) {
    return getVault(inputKey);
  }
}

module.exports = {
  set,
  get,
};
