const httpMod = require("http");

const server0 = httpMod.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    res.write("<h1>Welcome to Home</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to Men Section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Women Section</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to Kids Section</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Your cart is empty!</h1>");
    return res.end();
  }

  res.write(`
    <!DOCTYPE html>
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <head>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </head>
    </body>
    </html>
  `);
  return res.end();
});

const port0 = 3001;

server0.listen(port0, () => {
  console.log(`Server listening at port ${port0}...`);
});
