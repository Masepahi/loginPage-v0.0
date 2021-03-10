const http = require('http');
const fs = require('fs');
const path = require('path');
const userController = require('./controller/userController');
const bodyParser = require('body-parser');
const port = 5005

const jsonParser = bodyParser.json(); 


http.createServer(function(request, response) {

  if (request.url === "/" && request.method === "GET") {
    fs.readFile('./public/index.html', 'utf8', (err, page) => {
        if (err) return console.log(err);
        response.write(page);
        response.end();
    }) 
    } else if (request.url === "/style.css" && request.method === "GET") {
      fs.readFile('./public/style.css', 'utf8', (err, page) => {
        if (err) return console.log(err);
        response.write(page);
        response.end();
      }) 
    } else if (request.url === "/main.js" && request.method === "GET") {
      fs.readFile('./public/main.js', 'utf8', (err, page) => {
        if (err) return console.log(err);
        response.write(page);
        response.end();
      })
    } else if (request.url === "/userInfo.js" && request.method === "GET") {
      fs.readFile('./data/users.json', 'utf8', (err, page) => {
        if (err) return console.log(err);
        response.write(page);
        response.end();
      })
    } else if (request.url === "/userInfo" && request.method === "POST") {
      request.on('data', function(data) {
        let userInfo = data.toString()  
        console.log(userInfo);     
        statusResult(userController(userInfo))
    })

    function statusResult(a) {
      response.statusCode = a;
      response.end();
    }
    } else {
        response.write("Really really really really Bad Request");
        response.end()
    }
}).listen(port)
console.log(`The server started on ${port} !!!`);