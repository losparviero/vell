// index.js

import { setVault, getVault } from "./vault.js";
import { validateKey, validateVal } from "./validate.js";
import { exportEnv } from "./export.js";

if (process.argv[2] == "export") {
  let insertSecret = process.argv[3];
  await exportEnv(insertSecret);
}

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
