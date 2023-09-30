const { Category } = require("../../db");

const createCategory = async (req, res) => {
  try {
    const categoryData = req.body; 

    console.log(categoryData); 
    
    const createdCategories = await Promise.all(
      categoryData.map(async (category) => {
        const categoryName = typeof category === 'string' ? category : category.name;
        return await Category.create({ name: categoryName });
      })
    );

    res.status(201).json(createdCategories);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createCategory,
}
