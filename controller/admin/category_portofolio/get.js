const { CategoryPortofolio } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const category_portofolio = await CategoryPortofolio.findAll()
    return response.ok(category_portofolio, res)
}