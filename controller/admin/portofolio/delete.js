const { Portofolio } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const id = req.params.id;
    const portofolio = await Portofolio.findByPk(id)
    if(!portofolio){
        return response.notfound('data not found', res)
    }

    await portofolio.destroy({
        where: { id: id }
    })

    return response.ok2('data delete successfully', res)
}