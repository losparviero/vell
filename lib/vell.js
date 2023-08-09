#!/usr/bin/env node

/*!
 * Vell
 * Copyright (c) 2023 to present. All rights reserved.
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

import { setVault, getVault } from "./vault.js";
import { validateKey, validateVal } from "./validate.js";
import input from "input";
import { exportEnv } from "./export.js";

if (process.argv[2] == "export") {
  if (process.argv[3]) {
    const insertSecret = process.argv[3];
    await exportEnv(insertSecret);
  } else {
    console.log("Please provide secret name to be exported.");
    process.exit();
  }
} else {
  let keyName;
  let secretVal;

  async function setSecret() {
    keyName = await input.text("What would you like to name your secret?");
    secretVal = await input.text("What is the secret? 🔒");
    if (validateKey(keyName) && validateVal(secretVal)) {
      await setVault(keyName, secretVal);
    }
  }

  async function getSecret() {
    keyName = await input.text("What secret do you want to get?");
    if (validateKey(keyName)) {
      secretVal = await getVault(keyName);
      console.log(secretVal);
    }
  }

  async function vell() {
    let continueChoice = true;
    while (continueChoice) {
      const init = await input.select("Welcome to Vell! ✨", [
        { name: "Set a secret", value: "setSecret" },
        { name: "Get a secret", value: "getSecret" },
      ]);

      if (init === "setSecret") {
        await setSecret();
      } else if (init === "getSecret") {
        await getSecret();
      }

      continueChoice = await input.confirm("Do you want to continue?");
      if (!continueChoice) {
        break;
      }
    }
    process.exit();
  }

  vell();
}
