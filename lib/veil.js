#!/usr/bin/env node

/*!
 * Veil
 * Copyright (c) 2023 to present. All rights reserved.
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

"use strict";

import { setVault, getVault } from "./vault.js";
import { validateKey, validateVal } from "./validate.js";
import input from "input";

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

async function veil() {
  const init = await input.select("Welcome to Veil! ✨", [
    { name: "Set a secret", value: "setSecret" },
    { name: "Get a secret", value: "getSecret" },
  ]);

  if (init === "setSecret") {
    await setSecret();
  } else if (init === "getSecret") {
    await getSecret();
  }
}

veil();
