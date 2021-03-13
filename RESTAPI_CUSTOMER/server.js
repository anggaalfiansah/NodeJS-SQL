const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended : true}))

app.get('/', (req,res) => {
    res.json({message : 'Selamat datang Di Pusat Data'});
});

require('./app/routes/customer.routes')(app);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server telah berjalan pada port : ${port}`)
})