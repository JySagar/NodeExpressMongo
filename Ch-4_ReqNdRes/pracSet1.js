const httpMod = require("http");

const server0 = httpMod.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<title>Myntra Home Page</title>");
    res.write("<body>");
    res.write("<h1>Welcome to the Home Page of Myntra</h1>");
    res.write("<h3><a href='/men'>Men Page</h3>");
    res.write("<h3><a href='/women'>Women Page</h3>");
    res.write("<h3><a href='/kids'>Kids Page</h3>");
    res.write("<h3><a href='/cart'>Cart Page</h3>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/men") {
    res.write("<html>");
    res.write("<title>Myntra Men Section</title>");
    res.write("<body>");
    res.write("<h1>Welcome to the Men Section</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/women") {
    res.write("<html>");
    res.write("<title>Myntra Women Section</title>");
    res.write("<body>");
    res.write("<h1>Welcome to the Women Section</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/kids") {
    res.write("<html>");
    res.write("<title>Myntra Kids Section</title>");
    res.write("<body>");
    res.write("<h1>Welcome to the Kids Section</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/cart") {
    res.write("<html>");
    res.write("<title>Myntra Cart</title>");
    res.write("<body>");
    res.write("<h1>Your cart is empty!</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

const port0 = 3001;

server0.listen(port0, () => {
  console.log(`Server listening at port ${port0}...`);
});
