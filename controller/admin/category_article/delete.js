const { CategoryArticle } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const id = req.params.id
    const category = await CategoryArticle.findByPk(id)
    if(!category){
        return response.notfound('data not found', res)
    }

    await category.destroy({
        where: { id: id }
    })

    return response.ok2('data delete successfully', res)
}