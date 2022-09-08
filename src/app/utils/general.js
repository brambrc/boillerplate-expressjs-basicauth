const empty = require('is-empty');
const slugify = require('slugify');
const Hashids = require('hashids/cjs');
const { v4: uuidv4 }  = require('uuid');

const pagination = async (req) => {

	const page = !empty(req.query.page) ? parseInt(req.query.page) : 1;
	const limit = !empty(req.query.limit) ? parseInt(req.query.limit) : 20;
	const offset = (page * limit) - limit;

	return {limit:limit, offset:offset, page:page}
    
}

const generateToken = async (bit=24) => {
  console.log(bit)

	const crypto = require('crypto');

	return new Promise((resolve, reject) => {
      crypto.randomBytes(bit, function(ex, buffer) {
        
        if (ex) {
          reject();
        }
          
        const token = crypto
          .createHash("sha1")
          .update(buffer)
          .digest("hex");
        
        resolve(token);
        
      });
    
    });
    
}

const getRandomString = async (length) => {

  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#?!@$%^&*-';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
    
}

// const generateReceiptCode = ((deviceId, cashierId, time) => {
//     let alphabet = '23456789BCDFGHJKLMNPQRSTVWXYZ'
//     const str = cashierId.toString()
//     const hashids = new Hashids(str, 3, alphabet)
//     return hashids.encode([deviceId, new Date(time).getTime()])
// })

// const generateReceiptCode = ((outletId, time) => {
//     let alphabet = '23456789BCDFGHJKLMNPQRSTVWXYZ'
//     const str = uuidv4();
//     const hashids = new Hashids(str, 3, alphabet)
//     return hashids.encode([outletId, new Date(time).getTime()])
// })

const slug = (str) => {
  
  return slugify(str, {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })
    
}

module.exports = {
	pagination,
	generateToken,
  getRandomString,
  slug,
  generateReceiptCode
}