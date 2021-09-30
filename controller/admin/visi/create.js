const { Visi } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();
module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const data = req.body;
    await Visi.create(data);

    return res.json({
        status: 'success',
        message: 'data add successfully'
    })


}