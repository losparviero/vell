# Vell

Manage your secrets and use them everywhere!

### Features

1. Vercel deployable (WIP) and self hostable.
2. Persistent and encrypted Redis for secret store.
3. Fetch secrets with APIs (WIP).
4. Assign secrets to projects.

<br>

### Usage

```bash
npx vellin
```

#### Node.js

```node
import Vell from "vellin";
const vell = new Vell();
const secret = await vell.get("secretName");
console.log(secret);
```

<br>

#### Install

```node
npm i -g vellin
```

<br>

### License

AGPL-3.0 ©️ Zubin