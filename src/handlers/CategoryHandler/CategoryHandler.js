const { createCategory } = require('../../controllers/Category/Category');

const handleCreateCategory = async (req, res) => {
  try {
    // Llama al controlador para crear la categoría
    await createCategory(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error al crear la categoría' });
  }
};

module.exports = {
  handleCreateCategory,
};