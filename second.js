const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const home = fs.readFileSync("home.html");
const about = fs.readFileSync("practice/easyTutorials.html");
const contact = fs.readFileSync("C:/Users/Admin/Desktop/web folders/practice/video_animation.html");
const services = fs.readFileSync("C:/Users/Admin/Desktop/web folders/practice/easyTutorials.html");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url == "/"){
      res.end(home);
    }
    else if(url == "/home"){
      res.end(home);
    }
    else if(url == "/about"){
      res.end(about);
    }
    else if(url == "/contact"){
      res.end(contact);
    }
    else if(url == "/services"){
      res.end(services);
    }
    else{
      res.statusCode = 404;
      res.end("<h1>404 File Not Found</h1>");
    }
});

console.log('Hello');
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});