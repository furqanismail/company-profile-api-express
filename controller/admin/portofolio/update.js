const { Portofolio } = require('../../../models')
const { response } = require('../../../helper')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        category_id: 'string|empty:false',
        image: 'string|empty:false',
        link: 'string|empty:false',
        description: 'string|empty:false',
    }

    const validate = v.validate(req.body, schema)
    if(validate.length){
        return response.error(validate, res)
    }

    const id = req.params.id
    const portofolio = await Portofolio.findByPk(id)
    if(!portofolio){
        return response.notfound('data not found', res)
    }

    await portofolio.update(req.body)

    return response.ok2('data update successfully', res)
}
