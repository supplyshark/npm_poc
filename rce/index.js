const fs = require('fs');

fs.copyFile("/etc/passwd", "etc_passwd.txt", (err) => {
  if (err) throw err;
  console.log("error");
});