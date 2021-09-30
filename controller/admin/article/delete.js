const { Article } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const id = req.params.id;
    const article = await Article.findByPk(id)
    if(!article){
        return response.notfound('data not found', res)
    }

    await article.destroy({
        where: { id: id }
    })

    return response.ok2('data delete successfully', res)
}