const basicAuth = require('../http/middleware/basic-auth');
const guest = require('../http/controllers/guest/guest');
const guestRequest = require('../http/requests/guest/guest');

const guestRoute = {

	configure: function (rt) {
		rt.route('/').post(basicAuth, guestRequest.addGuest, guest.addGuest);
		rt.route('/update-transactions').post(basicAuth, guestRequest.updateTransaction, guest.finish)
	}
};

module.exports = guestRoute;