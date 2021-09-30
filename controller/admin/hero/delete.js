const { Hero } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
    const heros = await Hero.findByPk(id);
    if(!heros){
        return res.status(404).json({
           status: 'error',
           message: 'data not found'
        });
    }
    await heros.destroy({
       where: { id: id }
    });

    return res.json({
       status: 'success',
       message: 'data delete successfully'
    });
}