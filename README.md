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
const { vell } = require("vellin");
vell.set(name, secret);
const secret = vell.get(name);
}
```

<br>

#### Install

```node
npm i -g vellin
```

#### Uninstall

```node
npm uninstall vellin
```



<br>

### License

AGPL-3.0 ©️ Zubin