const moment = require('moment');
const { v4: uuidv4 }  = require('uuid');
const { generateToken }  = require('../utils');

const calldb = require('../dbs/db/models');

const area = require('./example');
//you can add new route file here

const routes = {

	init: function(app) {

		app.prefix('/example', function (route) {area.configure(route)});
	
		app.get('/', function (req, res) {
			res.status(403).send('Welcome to auth microservices. [Forbidden][Table Management]')
		})

		app.get('/health', function (req, res) {
			return res.status(200).json({status_code:200,success:true,timestamp:new Date(1638376149*1000)});
		})

		app.post('/register-key', async function (req, res) {
		  	
			const create = await calldb.app_key.create({
				name: req.body.name,
				key: uuidv4(),
				secret: await generateToken(),
				status: 1
			})

			return res.status(201).json({status_code:201,success:true,data:{name:create.name}});

		})
	}

};

module.exports = routes;