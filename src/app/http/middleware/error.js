const error = {

	init: function(app) {
		
		app.use(function(req, res) {
			res.status(404).send({status_code:404, success:false, message: 'URL Not Found' })
		});

		app.use(function(error, req, res, next) {

			let errMessage = error.message;

			if(process.env.NODE_ENV == 'production'){

				if(error.status == 500){
					//errMessage = "internal server error"
					errMessage = error.message
				}
			}

			res.status(error.status || 500).send({status_code:error.status || 500, success:false, message: errMessage || "failed: not known error", msg: error.msg })
			
		});
	},

    err401: function(){
        const error = new Error('Unauthorized (Invalid or Expired)');
        error.status = 401
        return error; 
    },

    httpError: function(status,message){
        const error = new Error(message);
        error.status = status
        return error; 
    }

};

module.exports = error;