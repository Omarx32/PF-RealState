const { Category } = require("../../db");

const createCategory = async (req, res) => {
  try {
    const categoryData = req.body; // Obtén el arreglo de categorías desde el cuerpo de la solicitud

    // Itera sobre cada categoría y crea una nueva entrada en la base de datos
    const createdCategories = await Promise.all(
      categoryData.map(async (category) => {
        return await Category.create({ name: category });
      })
    );

    res.status(201).json(createdCategories);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error al crear las categorías' });
  }
};

module.exports = {
  createCategory,
}