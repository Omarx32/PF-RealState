const { Category } = require("../../db");

const createCategory = async (req, res) => {
  try {
    const categoryData = req.body; 

    console.log(categoryData); 
    
    const createdCategories = await Promise.all(
      categoryData.map(async (category) => {
        return await Category.create({ name: category });
      })
    );

    res.status(201).json(createdCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getCategorys = async() =>{

    const category = await Category.findAll();
    return category

}

module.exports = {
  createCategory,
  getCategorys
};
