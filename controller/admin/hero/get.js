const { Hero } = require('../../../models');

module.exports = async (req, res) => {
    const heros = await Hero.findAll();
    res.json({
       status: 'success',
       data: heros
    });
}