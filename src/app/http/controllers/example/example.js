const moment = require('moment');
const sequelize = require('sequelize');

//Repositories
// do import repositories here
// const nameRepo = require('../../../repositories/path-to-repo')

//Services
// do import services here

const err = require('../../middleware/error');
const db_tablemanagement = require('../../../dbs/tablemanagement/models');
const { pagination } = require('../../../utils');

class Example {

  

  async example(req, res, next) {
    try {
      // do something here
      // example:
      // const data = await nameRepo.exampleRepo();
      // res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new Example();