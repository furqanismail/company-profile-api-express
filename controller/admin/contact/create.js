const { Contact } = require('../../../models')
const { response } = require('../../../helper')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async (req, res) => {
    const schema = {
        address: 'string|empty:false',
        phone: 'string|empty:false',
        instagram: 'string|empty:false',
        facebook: 'string|empty:false',
    }

    const validate = v.validate(req.body, schema)
    if(validate.length){
        return response.error(validate, res)
    }

    await Contact.create(req.body)

    return response.ok2('add data successfully', res)
}