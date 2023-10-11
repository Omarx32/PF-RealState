const { Users } = require('../../db');

const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (user) {
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
      
        }
      });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUsers,
};
