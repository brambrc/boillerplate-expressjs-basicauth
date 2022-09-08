const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

require('express-async-errors');

//Routes
const routes = require('../app/routes');

//Error
const error = require('../app/http/middleware/error');

//Static
const staticRoute = require('../app/static');

var moment = require('moment-timezone');
moment().tz("Asia/Jakarta").format();

express.application.prefix = express.Router.prefix = function (path, configure) {
    var router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
};

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//execute routes
routes.init(app)
staticRoute.init(express,app)

//handler error
error.init(app);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`))