const { CategoryArticle } = require('../../../models')
const { response } = require('../../../helper')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema)
    if(validate.length){
        return response.error(validate, res)
    }

    await CategoryArticle.create(req.body)

    return response.ok2('data add succesfully', res)
}