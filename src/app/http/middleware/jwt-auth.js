var fs = require('fs');

const db = require('../dbs/models');
const empty = require('is-empty');
const jwt = require('jsonwebtoken');
const err = require('../http/middleware/error');

module.exports = async function jwtAuth(req, res, next) {

    try {

        // check for statid auth header
        if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
            return next(err.err401());
        }

        var publicKEY  = fs.readFileSync(process.env.JWT_PUBLIC_KEY, 'utf8');

        var verifyOptions = {
            issuer: process.env.JWT_ISSUER,
            audience: String(process.env.JWT_AUD),
            expiresIn: parseInt(process.env.JWT_EXPIRES),
            algorithm: [String(process.env.JWT_ALGORITHM)]
        };

        const token = req.headers.authorization.split(' ')[1];

        var decode = jwt.decode(token, {complete:true});
        //console.log(decode)

        if(decode.header.jti != decode.payload.jti){
            return next(err.err401());    
        }

        var legit = jwt.verify(token, publicKEY, verifyOptions);

        if(legit){

            const checkToken = await db.auth_access_token.findOne({where:{access_token:legit.jti,status:1}})

            if(checkToken){

                if(checkToken.expires_at < new Date()){
                    return next(err.err401());  
                }

                const dt = await db.user.findOne({where: {uuid:legit.sub}, attributes: ['id']});
            
                if(dt){
                    req.user = {id:dt.id}
                    next()
                }
            }else{
                return next(err.err401());     
            }   

        }else{
            return next(err.err401());
        }

    } catch (e) {

       return next(err.err401()); 

    }

}
