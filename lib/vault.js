// vault.js

import dotenv from "dotenv";
dotenv.config();
import Redis from "ioredis";

let client;

if (!process.env.DB_URL) {
  console.error(
    "Database URL not detected. Please set DB_URL environment variable.\nYou can visit https://upstash.com to get your Redis URL."
  );
  process.exit();
} else {
  client = new Redis(process.env.DB_URL);
}

function getVault(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data) {
          resolve(JSON.parse(data));
        } else {
          console.log("Invalid secret. Value not set.");
          resolve(process.exit());
        }
      }
    });
  });
}

function setVault(key, data) {
  return new Promise((resolve, reject) => {
    client.set(key, JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      } else {
        console.log("Secret stored successfully!");
        resolve();
      }
    });
  });
}

export { getVault, setVault };
