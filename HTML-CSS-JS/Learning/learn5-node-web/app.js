const http = require("http"); // to start server
const fs = require("fs"); // file handling ex. index.html
const port = 3000; // port for our server

// create our server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // if all good 200, run html file
    fs.readFile("index.html", (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write("Error: File Not Found"); // would instead render error.html
        }
        else {
            res.write(data);
        }
        res.end();
    })
    // res.write("Hello Node");
    // res.end();
})

// server to listen on the port we want it to
server.listen(port, error => {
    if (error) {
        console.log(`Soemthing went wrong, ${error}`);
    }
    else {
        console.log(`Server is listening on port ${port}`);
    }
})
// to see in browser, type --> http://localhost:3000/