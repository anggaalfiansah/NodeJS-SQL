// memanggil Modul DB
const sql = require('./db');

// Constructor data dari Database
const Customer = function (customer) {
    this.email = customer.email;
    this.nama_lengkap = customer.nama_lengkap;
    this.aktif = customer.aktif;
};

Customer.create = (newCustomer, result) => {
    let sql_query = 'INSERT INTO customers SET ?';
    sql.query(sql_query, newCustomer, (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
            return;
        }
        console.log("Data Customer dibuat", { id: res.insertId, ...newCustomer });
        result(null, { id: res.insertId, ...newCustomer });
    })
};

Customer.find = (customerId, result) => {
    let sql_query = `SELECT * FROM customers WHERE nama_lengkap LIKE '%${customerId}%'`;
    sql.query(sql_query, (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
            return;
        }

        // Jika data ditemukan
        if (res) {
            console.log('Customer Ditemukan : ', res)
            result(null, res);
            return;
        }

        // Jika data tidak ada
        result({ kind: 'data tidak ditemukan' }, null)
    });
}

Customer.getAll = result => {
    let sql_query = `SELECT * FROM customers`;
    sql.query(sql_query, (err, res) => {
        if (err) {
            console.log('error : ', err);

            result(err, null);
            return;
        }

        console.log('Customers : data ditemukan', res);
        result(null, res);
    });
}

Customer.updateById = (id, customer, result) => {
    let sql_query = `UPDATE customers SET email= ?, name_lengkap= ?, aktif= ? WHERE id= ?`;
    sql.query(sql_query, [customer.email, customer.nama_lengkap, customer.aktif, id], (err, res) => {
        if (err) {
            console.log('error : ', err);

            result(err, null);
            return;
        }

        // jika data id tidak ditemukan
        if (res.effectedRow == 0) {
            result({ kind: 'data customers tidak ditemukan' }, null);
            return;
        }
        // jika data ditemukan dan berhasil diupdate
        console.log('Update data ', { id: id, ...customer });
        result(null, { id: id, ...customer });
    });
}

Customer.remove = (id, result) => {
    let sql_query = `DELETE FROM customers WHERE id= ?`;
    sql.query(sql_query, id, (err, res) => {
        if (err) {
            console.log('error : ', err);

            result(err, null);
            return;
        }

        // jika data id tidak ditemukan
        if (res.effectedRow == 0) {
            result({ kind: 'data customer tidak ditemukan' }, null);
            return;
        }
        // jika data ditemukan dan berhasil diupdate
        console.log('Data customer telah dihapus dengan id : ', { id: id });
        result(null, res);
    });
}

Customer.removeAll = result => {
    let sql_query = `Delete FROM customer `;
    sql.query(sql_query, (err, res) => {
        if (err) {
            console.log('error : ', err);

            result(err, null);
            return;
        }
        // jika data ditemukan dan berhasil diupdate
        console.log(`Semua data telah dihapus ${res.effectedRow}`);
        result(null, res);
    });
}

module.exports = Customer;