const { Team } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const id = req.params.id
    const team = await Team.findByPk(id)
    if (!team){
        return response.notfound('data not found', res)
    }

    await team.destroy({
        where: { id: id }
    })

    return response.ok2('data delete successfully', res)
}