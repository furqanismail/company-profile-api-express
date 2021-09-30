const { Service } = require('../../../models')
const { response } = require('../../../helper')
const { service } = require('../../../validation')

module.exports = async (req, res) => {

    const data = req.body
    const validate = service.validate(data)
    if(validate.length){
        return response.error(validate, res)
    }

    await Service.create(data)

    response.ok2('data add successfully', res)
}