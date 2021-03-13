const Customer = require('../models/customer.model');

// Create & save customer baru
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content Tidak Boleh Kosong'
        })
    }

    // Create customer
    const customer = new Customer({
        email: req.body.email,
        nama_lengkap: req.body.nama_lengkap,
        aktif: req.body.aktif
    })

    // Save customer ke database
    Customer.create(customer, (err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server error, membuat data customer'
        })
        else res.send(data)
    })
}

// Menampilkan seluruh data
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server error, mengambil data customer'
        })
        else res.send(data)
    })
}

// menampilkan satu data
exports.findAllName = (req, res) => {
    Customer.find(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === 'tidak ditemukan') {
                res.status(404).send({
                    message: `customer dengan id ${req.params.customerId} tidak ditemukan`
                })
            } else {
                res.status(500).send({
                    message: `Internal error, customer id : ${req.params.customerId} `
                })
            }
        }
        else res.send(data)

    })
}

// update data customer by id
exports.update = (req,res) => {
    // validasi request
    if(!req.body) {
        res.status(400).send({
            message: 'Content Tidak Boleh Kosong'
        })
    }

    console.log(req.body)

    Customer.updateById(req.params.customerId, new Customer(req.body), (err, data) => {
        if (err) {
            if (err.kind === 'tidak ditemukan') {
                res.status(404).send({
                    message: `customer dengan id ${req.params.customerId} tidak ditemukan`
                })
            } else {
                res.status(500).send({
                    message: `Internal error, customer id : ${req.params.customerId} `
                })
            }
        }
        else res.send(data)

    })
}

// hapus data berdasarkan id
exports.delete = (req,res) => {

    Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === 'tidak ditemukan') {
                res.status(404).send({
                    message: `customer dengan id ${req.params.customerId} tidak ditemukan`
                })
            } else {
                res.status(500).send({
                    message: `Internal error, customer id : ${req.params.customerId} `
                })
            }
        }
        else res.send({ message: `data customer telah dihapus dengan id : ${req.params.customerId}` })

    })
}

// menghapus seluruh data customer
exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server error, mengambil data customer'
        })
        else res.send({message : 'seluruh data terhapus'})
    })
}