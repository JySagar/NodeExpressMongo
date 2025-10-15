const fs = require("fs");

fs.writeFile(
  "output.txt",
  "This thing will be written inside Output",
  (err) => {
    if (err) console.log("Error Occurred");
    else console.log("File Written Successfully");
  }
);
