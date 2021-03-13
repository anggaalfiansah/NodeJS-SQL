const express = require('express');
const app = express();

app.get('/',function(req,res) {
    res.send('Hello ExpressJS/GET');
});

app.all('/all',function(req,res) {
    res.send('Hello ExpressJS/ALL');
}); 

let port = 1234;
app.listen(port, function() {
    console.log('Aplikasi Berjalan di Port : '+ port)
});