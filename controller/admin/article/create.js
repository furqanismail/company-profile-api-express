const { Article } = require('../../../models')
const { response } = require('../../../helper')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        category_id: 'string|empty:false',
        image: 'string|empty:false',
        description: 'string|empty:false',
    }

    const validate = v.validate(req.body, schema)
    if(validate.length){
        return response.error(validate, res)
    }

    await Article.create(req.body)

    return response.ok2('add data successfully', res)
}