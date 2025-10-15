const httpMod = require("http");

const server0 = httpMod.createServer((req, res) => {
  console.log(req);
  // Below line exits the event loop i.e. it will stop the server after the first request. It's from Chapter 4
  process.exit();
});

const port0 = 3000;

server0.listen(port0, () => {
  console.log(`Server0 listening at port ${port0}...`);
});

// ----------------------------------------------------------------------------------

/*
⚠️ What process.exit() Does
It kills the server instantly.

So your server will respond to only one request, and then shut down completely.

If you refresh the browser after that, you'll get a "connection refused" error — because the server is no longer running.
*/
