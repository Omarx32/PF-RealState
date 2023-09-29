const { Property, Category } = require("../../db");

const getPropertyByName = async(title) => {
  const Properties = await Property.findAll({
    where: {title},
    include:[{model: Category}]
  })
  return [...Properties]
}

const getAll = async (req, res) => {
    const Properties= await Property.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
  
    return [...Properties];
  };


  module.exports = {
    getAll,
    getPropertyByName
  };