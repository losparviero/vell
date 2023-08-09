// index.js

import { setVault, getVault } from "./vault.js";
import { validateKey, validateVal } from "./validate.js";

class Vell {
  async set(inputKey, secretVal) {
    if (validateKey(inputKey) && validateVal(secretVal)) {
      await setVault(inputKey, secretVal);
    }
  }

  async get(inputKey) {
    if (validateKey(inputKey)) {
      return await getVault(inputKey);
    }
  }
}

export default Vell;
