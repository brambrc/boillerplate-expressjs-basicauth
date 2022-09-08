const Joi = require('joi');

module.exports = {

  example: async (req, res, next) => {

    const schema = Joi.object({
      // do validation here
      // company_id: Joi.string().required(),
      // outlet_id: Joi.string().required(),
      // pawoon_id: Joi.string().required(),
      // tables: Joi.array().items({
      //   name: Joi.string().required(),
      //   capacity: Joi.number().required(),
      //   time: Joi.number().allow(null),
      //   reminder: Joi.number().allow(null),
      //   status: Joi.string().required().valid('1', '0')
      // })
    })

    // var validate = req.query

    // const { error } = await schema.validate(validate)

    if (error) {
      error.status = 400
      return next(error)
    }
    next()
  },

}