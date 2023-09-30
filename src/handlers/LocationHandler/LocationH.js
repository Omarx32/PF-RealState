const createLocation= require('../../controllers/LocationC/Location');

const handleCreateLocation = async (req, res) => {
  try {
    await createLocation(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error al crear la categoría' });
  }
};

module.exports = {
  handleCreateLocation,
};