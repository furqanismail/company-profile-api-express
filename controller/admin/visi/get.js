const { Visi } = require('../../../models');
module.exports = async (req, res) => {
    const visi = await Visi.findAll();
    return res.json({
        status: 'success',
        data: visi
    })
}