const { Article } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const article = await Article.findAll()
    return response.ok(article, res)
}