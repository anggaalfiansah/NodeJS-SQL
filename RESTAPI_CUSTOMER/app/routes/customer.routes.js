module.exports = app => {
    const customers = require('../controllers/customer.controller');

    // membuat data customer
    app.post('/customer', customers.create);

    // Mengambil semua Data
    app.get('/customer', customers.findAll);

    // Mengambil Data berdasarkan ID
    app.get('/customer/:customerId', customers.findAllName);

    // update data customer
    app.put('/customer/:customerId', customers.update);

    // delete berdasarkan id
    app.delete('/customer/:customerId', customers.delete);

    // delete all
    app.delete('/customer/', customers.deleteAll);
}