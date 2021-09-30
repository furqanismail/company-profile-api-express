const { Hero } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema= {
        title: 'string|empty:false',
        image: 'string|empty:false',
        type: 'string|empty:false',
        description: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const id = req.params.id;
    const heros = await Hero.findByPk(id);
    if(!heros){
        return res.status(404).json({
           status: 'error',
           message: 'data not found'
        });
    }

    const data = req.body;
    await heros.update(data);


    return res.json({
        status: 'success',
        message: 'data update successfully'
    });
}