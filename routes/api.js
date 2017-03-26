var express = require('express');
var router = express.Router();
var dbclient = require('../code/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    var db = dbclient.getClient();
    res.render('index', { title: 'Express' });
});
router.post('/test', function (req, res, next) {
    res.json(req.body);
});
router.post('/about_you', function (req, res, next) {
    var db = dbclient.getClient();
    var fname = req.body.fname;
    var lname = req.body.lname;
    var address = req.body.address;
    var address2 = req.body.address2;
    var city = req.body.city;
    var state = req.body.state;
    var zip_code = req.body.zip_code;
    var email = req.body.email;
    var reminder = req.body.reminder;
    db.one(['INSERT INTO public.users (fname, lname, address, address2, city, state, zip_code, email, reminder)',
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)  returning id'].join(' '), [fname, lname, address, address2, city, state, zip_code, email, reminder])
        .then(data => {
            res.json({ success: true, data: data });
        })
        .catch(err => {
            next(err);
        });

});

router.post('create_account', function *(req, res, next) {
    var db = dbclient.getClient();
    var fname = req.body.fname;
    var lname = req.body.lname;
    var address = req.body.address;
    var address2 = req.body.address2;
    var city = req.body.city;
    var state = req.body.state;
    var zip_code = req.body.zip_code;
    var email = req.body.email;
    var reminder = req.body.reminder;
    var password = req.body.password;
    var verifypassword = req.body.verifypassword;
    db.one(['INSERT INTO public.users (fname, lname, address, address2, city, state, zip_code, email, reminder, password)',
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id'],join(' '),[fname, lname, address, address2, city, state, zip_code, email, reminder, password])
        .then(data => {
            res.json({ success: true, data: data});
        })
        .catch(err => {
            next(err);
        });
});

router.get('/user_data', function (req, res, next) {
    var db = dbclient.getClient();
    var json2csv = require('json2csv');
    var fields = ['fname', 'lname', 'address', 'address2', 'city', 'state', 'zip_code', 'email', 'reminder'];
    var fieldNames = ['fname', 'lname', 'address', 'address2', 'city', 'state', 'zip_code', 'email', 'reminder'];

    db.any('Select * from public.users').then(results => {
        var data = json2csv({ data: results, fields: fields, fieldNames: fieldNames });
        res.set('Content-Type', 'application/octet-stream');
        res.attachment('user.csv');
        return res.status(200).send(data);
    }).catch(err => {
        next(err);
    });
});

router.get('/survey_data', function (req, res, next) {
    var db = dbclient.getClient();
    var json2csv = require('json2csv');
    var fields = ['income', 'age', 'education', 'isp', 'usage', 'internet', 'email']; //database column names
    var fieldNames = ['income', 'age', 'education', 'isp', 'usage', 'internet', 'email']; //heading names csv

    db.any('Select * from public.survey').then(results => {
        var data = json2csv({ data: results, fields: fields, fieldNames: fieldNames }); 
        res.set('Content-Type', 'application/octet-stream');
        res.attachment('survey.csv');
        return res.status(200).send(data);
    }).catch(err => {
        next(err);
    });
});

router.get('/speed_test_data', function (req, res, next) {
    var db  = dbclient.getClientClient();
    var json2csv = require('json2csv');
    var fields = ['download', 'upload', 'hostname', 'email', 'ip_address', 'date_time', 'testserver'];
    var fieldNames = ['download', 'upload', 'hostname', 'email', 'ip_address', 'date_time', 'testserver'];

    db.any('Select * from public.internetstats').then(results => {
        var data = json2csv({ data: results, fields: fields, fieldNames: fieldNames });
        res.set('Content-Type', 'application/octet-stream');
        res.attachment('speed_test.csv');
        return res.status(200).send(data);
    }).catch(err => {
        next(err);
    });
});    


module.exports = router;
