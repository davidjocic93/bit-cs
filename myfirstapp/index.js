var http = require('http');
var hostname = "127.0.0.1";
var port = 3000;

var server = http.createServer(function (req,res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>gasjdgashgh</h1><p>agjhads</p>");
});

server.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});

var open = require("open");
open("http://" + hostname + ":" + port + "/")

var figlet = require('figlet');

// figlet('Hello World!!', function(err, data) {
//    if (err) {
//        console.log('Something went wrong...');
//        console.dir(err);
//        return;
//    }
//    console.log(data)
// });

// figlet.text('Boo!', {
//     font: 'Ghost',
//     horizontalLayout: 'default',
//     verticalLayout: 'default'
// }, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

