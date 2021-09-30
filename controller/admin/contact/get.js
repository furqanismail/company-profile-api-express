const { Contact } = require('../../../models')
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const contact = await Contact.findAll()
    return response.ok(contact, res)
}