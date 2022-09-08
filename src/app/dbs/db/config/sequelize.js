require('dotenv').config();

var seq = {

	development : function(){

		var cfg = {
			username : process.env.DB_USER_PAWOONV2,
			password : process.env.DB_PASSWORD_PAWOONV2,
			database : process.env.DB_NAME_PAWOONV2,
			host : process.env.DB_HOST_PAWOONV2,
			dialect : process.env.DB_DIALECT_PAWOONV2,
			replication: {
		        read: [
		            {
		                host: process.env.DB_HOST_READ_PAWOONV2,
		                username: process.env.DB_USER_PAWOONV2,
		                password: process.env.DB_PASSWORD_PAWOONV2,
		                port : process.env.DB_PORT_READ_PAWOONV2
		            }
		        ],
		        write: {
		            host: process.env.DB_HOST_WRITE_PAWOONV2,
		            username: process.env.DB_USER_PAWOONV2,
		            password: process.env.DB_PASSWORD_PAWOONV2,
		            port : process.env.DB_PORT_WRITE_PAWOONV2
		        }
		    },
		    pool: {
		        max: 20,
		        idle: 30000
		    },
		    define: {
		        timestamps: false
		    },
		    dialectOptions: {
		        timezone: process.env.DB_TIMEZONE || '+07:00'
		    },
		    query : {
		        raw: false
		    },
			logging: true,
		    logging: function (str) {
		        if (process.env.NODE_ENV !== 'production')
		            console.log(str)
		    },
		    define : {
		        createdAt: 'created_at',
		        updatedAt: 'updated_at',
		        deletedAt: 'deleted_at',
		    }
		}

		return cfg;
	},

	production : function(){
		
		var cfg = {
			username : process.env.DB_USER_PAWOONV2,
			password : process.env.DB_PASSWORD_PAWOONV2,
			database : process.env.DB_NAME_PAWOONV2,
			host : process.env.DB_HOST_PAWOONV2,
			dialect : process.env.DB_DIALECT_PAWOONV2,
			replication: {
		        read: [
		            {
		                host: process.env.DB_HOST_READ_PAWOONV2,
		                username: process.env.DB_USER_PAWOONV2,
		                password: process.env.DB_PASSWORD_PAWOONV2,
		                port : process.env.DB_PORT_READ_PAWOONV2
		            }
		        ],
		        write: {
		            host: process.env.DB_HOST_WRITE_PAWOONV2,
		            username: process.env.DB_USER_PAWOONV2,
		            password: process.env.DB_PASSWORD_PAWOONV2,
		            port : process.env.DB_PORT_WRITE_PAWOONV2
		        }
		    },
		    pool: {
		        max: 20,
		        idle: 30000
		    },
		    define: {
		        timestamps: false
		    },
		    dialectOptions: {
		        timezone: process.env.DB_TIMEZONE || '+07:00'
		    },
		    query : {
		        raw: false
		    },
			logging: true,
		    logging: function (str) {
		        if (process.env.NODE_ENV !== 'production')
		            console.log(str)
		    },
		    define : {
		        createdAt: 'created_at',
		        updatedAt: 'updated_at',
		        deletedAt: 'deleted_at',
		    }
		}

		return cfg;
	}

};

module.exports = seq;