var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

/*const cn = {
    host: 'localhost',
    port: 5432,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password'
};*/

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:andromac35@localhost:5432/technology';

try {
	var db = pgp(connectionString);	
}
catch(e)
{
	console.log("Cannot connect to DB "+e);
	process.exit(1);
}

function getAllTechnologies(req, res, next) {
	
	console.log("Start getAllTechnologies...");
	
  db.any('select * from technology')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL technologies'
        });
    })
    .catch(function (err) {
	
		console.log("Error getAllTechnologies..."+err);
	
      return next(err);
    });
}

function getSingleTechnology(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from pups where id = $1', pupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE technology'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createTechnology(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateTechnology(req, res, next) {
  db.none('update technologies set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeTechnology(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result('delete from technologies where id = $1', pupID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} puppy`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllTechnologies: getAllTechnologies,
  getSingleTechnology: getSingleTechnology,
  createTechnology: createTechnology,
  updateTechnology: updateTechnology,
  removeTechnology: removeTechnology
};
