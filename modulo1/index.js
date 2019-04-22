const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    return res.end("hello world");
  })
  .listen(3005);
