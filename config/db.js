/**
 * Created by Admin on 4/30/16.
 */
'use strict';

var sqlite3 = require('sqlite3').verbose();
var path = require('path');

var dbPath = path.join(__dirname, '../data/todos.db');

var db = new sqlite3.Database(dbPath);

module.exports = db;