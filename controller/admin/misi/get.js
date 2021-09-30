const { Misi } = require('../../../models');
module.exports = async (req, res) => {
    const misi = await Misi.findAll();
    return res.json({
        status: 'success',
        data: misi
    })
}