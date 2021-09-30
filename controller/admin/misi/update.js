const { Misi } = require('../../../models');
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

    const id = req.params.id;
    const misi = await Misi.findByPk(id);
    if(!misi){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }

    const data = req.body;
    await misi.update(data);

    return res.json({
        status: 'success',
        message: 'data update successfully'
    })


}