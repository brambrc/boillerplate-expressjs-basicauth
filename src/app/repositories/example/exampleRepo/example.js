var fs = require('fs');

const empty = require('is-empty');
const { v4: uuidv4 } = require('uuid');
const { Op, Sequelize } = require('sequelize');

//internalFile
// const db_pawoon_order  = require('../../../dbs/pawoonorder/models');

// const models = require('../../../dbs/db/models');

class ExampleRepository {

  constructor(t = null) {
    this.transaction = !empty(t) ? { transaction: t } : null;
  }

  async findOne(params) {
    // const options = {}
    // let include = []
  }
}

module.exports = ExampleRepository;