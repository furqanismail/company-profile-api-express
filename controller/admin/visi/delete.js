const { Visi } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const visi = await Visi.findByPk(id);
    if(!visi){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }
    await visi.destroy({
        where: { id: id }
    })
    return res.json({
        status: 'success',
        message: 'data delete successfully'
    })
}