const { UsersGoogle } = require('../../db');

const createUser = async (req, res) => {
    try {
        // Verificar si el usuario de Google ya existe en la base de datos
        const existingUser = await UsersGoogle.findOne({
            where: {
                googleId: req.body.googleId,
            },
        });

        if (existingUser) {
            // Si el usuario de Google ya existe, devuélvelo
            return res.status(200).json(existingUser);
        }

        // Si el usuario de Google no existe, créalo en la base de datos
        const newUser = await UsersGoogle.create(req.body);
        return res.status(201).json(newUser);
    } catch (error) {
        // Maneja los errores aquí
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    createUser,
};

