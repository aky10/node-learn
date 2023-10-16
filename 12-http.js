const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome");
  } else if (req.url === "/about") {
    res.end("about");
  }
  res.end(`<h1>OOPS</h1> <p>Problem go to </p><a href="/">back home</a>`);
});

server.listen(5000);
