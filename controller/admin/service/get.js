const { Service } = require('../../../models');
const { response } = require('../../../helper')

module.exports = async (req, res) => {
    const service = await Service.findAll();
    response.ok(service, res)
}