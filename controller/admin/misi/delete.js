const { Misi } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const misi = await Misi.findByPk(id);
    if(!misi){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }
    await misi.destroy({
        where: { id: id }
    })
    return res.json({
        status: 'success',
        message: 'data delete successfully'
    })
}