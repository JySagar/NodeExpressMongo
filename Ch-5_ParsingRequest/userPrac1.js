const httpMod = require("http");
const fsMod = require("fs");

const server0 = httpMod.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>JyCoding</title><head>");
    res.write("<body>");
    res.write("<h1>Enter your details: </h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter you Name'>"
    );
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' id='male' name='gender' value='male'>");
    res.write("<label for='female'>Female</label>");
    res.write("<input type='radio' id='female' name='gender' value='female'>");
    res.write("<input type='submit' value='Submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.write("<html>");
    res.write("<head><title>Product Page</title></body>");
    res.write("<body>");
    res.write("<h1>Checkout our products</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fsMod.writeFileSync("user1.txt", "Hard coded data");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>JyCoding Main Page</title></head>");
    res.write("<body><h1>This is JyCoding</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port0 = 3000;

server0.listen(port0, () => {
  console.log(`Server0 listening at port ${port0}...`);
});

// Okay till here practice done now to learn from vdo
