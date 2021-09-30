const { CategoryArticle } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const category_article = await CategoryArticle.findAll()
    return response.ok(category_article, res)
}