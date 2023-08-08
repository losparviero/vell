# Vell

Manage your secrets and use them everywhere!

### Features

1. Vercel deployable (WIP) and self hostable.
2. Persistent and encrypted Redis for secret store.
3. Fetch secrets with APIs (WIP).
4. Assign secrets to projects (WIP).

<br>

### Usage

```bash
npx vellin
```

#### API

WIP

#### Node.js

```node
const { Vell } = require("vellin");
const vell = new Vell(process.env.VELL_ID)
vell.populate(projectName).then(secrets => {
    console.log(secrets)
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