const { Portofolio } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const portofolio = await Portofolio.findAll()
    return response.ok(portofolio, res)
}