const { Service } = require('../../../models')

module.exports = async (req, res) => {
    const id = req.params.id;
    const service = await Service.findByPk(id)
    if(!service){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }

    await service.destroy({
        where: { id: id }
    })

    return res.json({
        status: 'success',
        message: 'data delete successfully'
    })
}