const httpMod = require("http");
const fsMod = require("fs");

const server0 = httpMod.createServer((req, res) => {
  console.log(req.url, req.method);
  // The below line is to exit the event loop once req comes.
  // process.exit();

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter Your Details : </h1></body>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'><br>"
    );
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' id='male' name='gender' value='male'/>");
    res.write("<label for='female'>Female</label>");
    res.write(
      "<input type='radio' id='female' name='gender' value='female'/><br>"
    );
    res.write("<input type='submit' value='Submit'>");
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Checkout our products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // const bodyObj = {};

      // for (const [key, value] of params.entries()) {
      //   bodyObj[key] = value;
      // }
      // console.log(bodyObj);
      // Below same work in one line

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fsMod.writeFileSync("user.txt", JSON.stringify(bodyObj));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>This is JySagar</h1></body>");
  res.write("</html>");
  return res.end();
});

const port0 = 3000;

server0.listen(port0, () => {
  console.log(`Server0 listening at port ${port0}...`);
});
