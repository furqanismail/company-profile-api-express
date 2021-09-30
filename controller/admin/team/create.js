const { Team } = require('../../../models')
const { response } = require('../../../helper')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        image: 'string|empty:false',
        link: 'string|empty:false',
        profession: 'string|empty:false',
    }

    const valdiate = v.validate(req.body, schema)
    if(valdiate.length){
        return response.error(valdiate, res)
    }

    await Team.create(req.body)
    return response.ok2('data add successfully', res)
}
