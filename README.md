# Vell

Manage your secrets and use them everywhere! Replace your .env files.

### Features

1. Vercel deployable (WIP) and self hostable.
2. Persistent and encrypted Redis for secret store.
3. Fetch secrets with APIs (WIP).
4. Assign secrets to projects.
5. Ditch tedious .env setup.

### Why

A lot of secret managing solutions exist already. The problem is many are either proprietary, work with certain cloud providers, work in private networks, or are complex to use and setup.

I was looking for a secrets manager that was easy to use, could store secrets in serverless data stores, and could fetch them fast with APIs. Extending this facility with Vercel, all it does is an API call to fetch, store or use secrets within your apps.

Replace your .env files.

All secrets are encrypted by default in both storage and transport (TLS).


### Usage

For self-hosted version setup a Redis database at [Upstash](https://upstash.com).

<details>
<summary>
ENV reference
</summary>
<br>
DB_URL - Upstash Redis database URL 
</details>

#### CLI

```bash
npx vellin
```

Follow the prompts.

#### Node.js

1. Set a secret

```node
import Vell from "vellin";
const vell = new Vell();
const secret = await vell.set("secretName", "secretValue");
```

2. Get a secret

```node
import Vell from "vellin";
const vell = new Vell();
const secret = await vell.get("secretName");
console.log(secret);
```

#### API

Coming  soon.

#### Install

```node
npm i -g vellin
```

### License

AGPL-3.0 ©️ Zubin