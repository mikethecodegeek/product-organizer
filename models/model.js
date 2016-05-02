var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          description TEXT,
          price INTEGER,
          category TEXT,
          image TEXT
        )`);

exports.getAll = function(cb) {
    db.all('SELECT * FROM products', cb);
};

exports.create = function(product, cb){
    db.run('INSERT INTO products (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)', product.name, product.description,
        product.price, product.category, product.image, cb)
};

exports.edit = function(body, cb) {
    var id = body.id;
    var thing = body.thing;
    db.run('UPDATE products SET name = ? WHERE id = ?', body.name,id, cb);
    db.run('UPDATE products SET description = ? WHERE id = ?', body.description,id, cb);
    db.run('UPDATE products SET price = ? WHERE id = ?', body.price,id, cb);
    db.run('UPDATE products SET category= ? WHERE id = ?', body.category,id, cb);
    db.run('UPDATE products SET image = ? WHERE id = ?', body.image,id, cb);
};
exports.getOneById = function(id,cb) {
    console.log(id.params.id);
    db.get('SELECT * FROM products WHERE id = ?', id.params.id, cb);
};

exports.removeById = function(id, cb) {
    var newid = id.params.id;
    db.run('DELETE FROM products WHERE id = ?', newid, cb);

};


