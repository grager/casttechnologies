var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/technologies', db.getAllTechnologies);
router.get('/api/technologies/:id', db.getSingleTechnology);
router.post('/api/technologies', db.createTechnology);
router.put('/api/technologies/:id', db.updateTechnology);
router.delete('/api/technologies/:id', db.removeTechnology);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'CAST Technologies'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
