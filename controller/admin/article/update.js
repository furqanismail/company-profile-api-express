const { Article } = require('../../../models')
const { response } = require('../../../helper')
const Validator = require('fastest-validator')
const v = new Validator()

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

    const id = req.params.id
    const article = await Article.findByPk(id)
    if(!article){
        return response.notfound('data not found', res)
    }

    await article.update(req.body)

    return response.ok2('data update successfully', res)
}
