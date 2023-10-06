const { Users } = require('../../db'); 

const createUser = async (req, res) => {
    try {
      const newUser = await Users.create(req.body); 
      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError' && error.fields.email) {
        res.status(400).json({ message: 'Este correo electrónico ya está registrado.' });
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  };
  
  module.exports = {
    createUser,
  };
