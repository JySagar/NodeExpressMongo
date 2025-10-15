const httpMod = require("http");

const server0 = httpMod.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // The below line is to exit the event loop once req comes.
  // process.exit();

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to HomePage</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Checkout our products</h1></body>");
    res.write("</html>");
    return res.end();
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

/* 
Here res.end() is a different thing from process.exit(). process.exit() stops the server but server keeps on listening to a req if it is not ended with res.end() which doesn't stop the server but it tells that the respond has ended and this was the last msg. 

Then return we put bcoz when in one condition i.e. no if else just a single condtion then it will work but if there is if else and then at last there is a default like here: then we need return bcoz when return is readed it stops and exits the function. so if we don't put return then after executing the code that met the condition of if else it will again execute the code i.e. in default. so if we put return then res.end() then server will stop with an end of response and control won't go to the default code below.

If the first condition matches, res.end() ends the response and return exits the function. */
