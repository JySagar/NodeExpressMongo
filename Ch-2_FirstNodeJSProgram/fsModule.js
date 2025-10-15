const fs = require("fs");

fs.writeFile(
  "./L-2/output.txt",
  "This thing will be written inside L-2",
  (err) => {
    if (err) console.log("Error Occurred");
    else console.log("File Written Successfully");
  }
);
