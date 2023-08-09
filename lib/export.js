import fs from "fs";
import dotenv from "dotenv";
import { getVault } from "./vault.js";
dotenv.config();

async function exportEnv(insertSecret) {
  let insertKey = await getVault(insertSecret);
  if (insertKey != null) {
    const addEnv = `${insertSecret}="${insertKey}"`;

    fs.readFile(".env", (err, data) => {
      if (err) {
        console.error("Error reading .env!");
      }
      if (data) {
        fs.appendFile(".env", `\n${addEnv}`, (err) => {
          if (err) {
            console.error("There was an error exporting to .env!");
          }
          console.log(`${insertSecret} exported succesfully!`);
          process.exit();
        });
      } else {
        console.log("No .env file found!");
      }
    });
  } else {
    console.log(`${insertSecret} not found!`);
    process.exit();
  }
}

export { exportEnv };
