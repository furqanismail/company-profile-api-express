const { Team } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const team = await Team.findAll()
    return response.ok(team, res)
}