'use strict';

var express = require('express');
var router = express.Router();
var model = require('../models/model');

router.get('/',(req, res) => {
    model.getAll((err, call) => {
        if (err){
            return res.status(400).send(err);
        }
        res.send(call)
        })
});

router.post('/',(req, res) => {
    model.create(req.body,(err, call) => {
        if (err){
            return res.status(400).send(err);
        }
        res.send(call)
    })
});

router.put('/',(req, res) => {
    model.edit(req.body,(err, call) => {
        if (err){
            return res.status(400).send(err);
        }
        res.send(call)
    })
});

router.delete('/:id',(req, res) => {
    model.removeById(req,(err, call) => {
        if (err){
            return res.status(400).send(err);
        }
        res.send(call)
    })
});

router.get('/details/:id',(req, res) => {
    model.getOneById(req,(err, call) => {
        if (err){
            return res.status(400).send(err);
        }
        res.send(call)
    })
});
module.exports = router;
