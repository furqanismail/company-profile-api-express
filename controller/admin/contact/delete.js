const { Contact } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findByPk(id)
    if(!contact){
        return response.notfound('data not found', res)
    }

    await contact.destroy({
        where: { id: id }
    })

    return response.ok2('data delete successfully', res)
}