const db = require('../../database/models');

const usersAPI = {

  list: async (req, res) => {
    try {
      const users = await db.sequelize.query("SELECT * FROM users", { type: db.Sequelize.QueryTypes.SELECT });
      
      return res.json({
        count: users.length,
        users: users.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          detail: `http://localhost:3000/api/users/${user.id}`
        }))
      });

    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  detail: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        image: `http://localhost:3000/images/users/${user.avatar}`
      });

    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener usuario' });
    }
  }

};

module.exports = usersAPI;