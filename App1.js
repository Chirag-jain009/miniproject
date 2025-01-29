const http = require("http");
const fspromise = require("fs/promises");
const newServer = http.createServer(async (req, res) => {

       if (req.url == "/") {
              const data = await fspromise.readFile("./homepage.html");
              res.end(data);

       }
       else if (req.url == "/about") {
              const data = await fspromise.readFile("./About.html");
              res.end(data);
       } else {
              const data = await fspromise.readFile("./error.html");
              res.end(data);
       }


}

);
newServer.listen(2500, () => console.log("---"));