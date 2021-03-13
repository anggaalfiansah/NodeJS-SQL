let mysql = require('mysql');

let koneksi = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'restapi'
});

// Modul 1
// koneksi.connect(function (err) {
//     if(err) {
//         console.log('Koneksi error'+err.stack);
//         return;
//     }

//     console.log('koneksi sukses dengan id '+ koneksi.threadId)
// })

// Create Database
// koneksi.connect(function (err) {
//     if(err) {
//         console.log('Koneksi error'+err.stack);
//         return;
//     }

//     koneksi.query('CREATE DATABASE restapi', function(err, result) {
//         if(err) {
//             throw err;
//         }
        
//         console.log('database telah dibuat');

//         koneksi.destroy();
//     });

// })

// Membuat Tabel di database
// koneksi.connect(function (err) {
//     if(err) {
//         console.log('Koneksi error'+err.stack);
//         return;
//     }

//     let createTable = 'CREATE TABLE IF NOT EXISTS customers(id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255) NOT NULL, nama_lengkap VARCHAR(255), aktif BOOLEAN DEFAULT false)';
//     koneksi.query(createTable, function(err, result) {
//         if(err) {
//             throw err;
//         }
        
//         console.log('Tabel customers telah dibuat');

//         koneksi.destroy();
//     });

// })

// Insert Data
// koneksi.connect(function (err) {
//     if(err) {
//         console.log('Koneksi error'+err.stack);
//         return;
//     }

//     let insertData = 'INSERT INTO customers(email,nama_lengkap) VALUES("anggaalfiansah26@gmail.com","Angga Alfiansah")';
//     koneksi.query(insertData, function(err, result) {
//         if(err) {
//             throw err;
//         }
        
//         console.log('Data sudah ditambahkan ke tabel customers telah dibuat');

//         koneksi.destroy();
//     });

// })

// Update data
// koneksi.connect(function (err) {
//     if(err) {
//         console.log('Koneksi error'+err.stack);
//         return;
//     }

//     let updateData = 'UPDATE customers SET email= "anggaalfiansah051015@gmail.com" WHERE id= 1';
//     koneksi.query(updateData, function(err, result) {
//         if(err) {
//             throw err;
//         }
        
//         console.log('Data customers sudah diupdate');

//         koneksi.destroy();
//     });

// })

// Insert Multiple Data
// koneksi.connect(function (err) {
//     if(err) {
//         console.log('Koneksi error'+err.stack);
//         return;
//     }

//     let insertData = 'INSERT INTO customers(email,nama_lengkap) VALUES("udin@gamboet-brotherhood.com","Udin Gamboet"),("Derpina@gmail.com","Derpina"),("otong@gmail.com","Otong")';
//     koneksi.query(insertData, function(err, result) {
//         if(err) {
//             throw err;
//         }
        
//         console.log('Data sudah ditambahkan ke tabel customers telah dibuat');

//         koneksi.destroy();
//     });

// })

// Tampil Data
koneksi.connect(function (err) {
    if(err) {
        console.log('Koneksi error'+err.stack);
        return;
    }

    let showData = 'SELECT * FROM customers';
    koneksi.query(showData, function(err, result, fields) {
        if(err) {
            throw err;
        }
        
        console.log(result);

        koneksi.destroy();
    });

})