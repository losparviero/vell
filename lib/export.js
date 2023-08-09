import fs from "fs";
import dotenv from "dotenv";
import { getVault } from "./vault.js";

async function exportEnv(insertSecret) {
  dotenv.config();
  let insertKey = await getVault(insertSecret);
  if (insertKey) {
    process.env.insertSecret = insertKey;

    const envData = Object.keys(process.env)
      .map((key) => `${key}=${process.env[key]}`)
      .join("\n");

    fs.appendFile(".env", `\n${envData}`, (err) => {
      if (err) {
        console.error("There wasn an error exporting to .env!");
        return;
      }
    });
  } else {
    console.log(`${inputSecret} not found!`);
  }
}

export { exportEnv };