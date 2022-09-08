const dbTableManagement = require('../../dbs/tablemanagement/models');
const empty = require('is-empty');

const {Base64} = require('@bagusrin/node-utils');

module.exports = async function basicAuth(req, res, next) {

    try {

        // check for statid auth header
        if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
            return res.status(401).json({status_code:401, success:false, message: 'Missing Authorization Header' });
        }

        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Base64.decode(base64Credentials);

        const [key,secret] = credentials.split(':');

        const dt = await dbTableManagement.app_key.findOne({
            where: {key:key, secret:secret, status:1}
        });

        if(dt){
            next()
        }else{
            return res.status(401).json({status_code:401, success:false, message: 'Invalid Authentication Credentials' });
        }

    } catch (e) {

        return res.status(401).json({status_code:401, success:false, message: 'Invalid Authentication Credentials' }); 

    }

}
