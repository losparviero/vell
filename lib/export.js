import fs from "fs";
import dotenv from "dotenv";
import { getVault } from "./vault.js";

async function exportEnv(insertSecret) {
  let envConfig = dotenv.config();
  const insertKey = await getVault(insertSecret);
  if (insertKey) {
    process.env.insertSecret = insertKey;

    const envData = Object.keys(envConfig)
      .map((key) => `${key}=${process.env[key]}`)
      .join("\n");

    fs.appendFile(".env", `\n${envData}`, (err) => {
      if (err) {
        console.error("There wasn an error exporting to .env!");
        return;
      }
    });
    console.log(`${inputSecret} exported succesfully!`);
  } else {
    console.log(`${inputSecret} not found!`);
  }
  process.exit();
}

export { exportEnv };
