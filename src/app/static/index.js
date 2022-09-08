const path = require('path');

const staticRoute = {

	init: function(express, app) {

		const options = {
		  root: path.join(__dirname, '../../../docs')
		};

		app.use(express.static(path.join(__dirname, '../../../docs')));
		app.get('/docs', (req, res) => (
			res.status(200).sendFile('index.html', options)
		))
	}

};

module.exports = staticRoute;