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
  try {
    client = new Redis(process.env.DB_URL);
  } catch (error) {
    console.error(
      "There was an error connecting to the database.\nPlease check your network configuration."
    );
    process.exit();
  }
}

async function getVault(key) {
  const data = await client.get(key);
  if (!data) {
    console.log("Invalid secret. Value not set.");
    return process.exit();
  }
  return JSON.parse(data);
}

async function setVault(key, data) {
  try {
    await client.set(key, JSON.stringify(data));
    console.log("Secret stored successfully!");
  } catch (error) {
    console.log(error);
    return process.exit();
  }
}

export { getVault, setVault };
