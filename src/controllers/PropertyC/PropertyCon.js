const {Property, Category} = require('../../db');

const getAll = async(req, res) =>{
    const property = await Property.findAll({
        include:[
           { 
            model: Category,
            attribute: ["title"],
        }

        ]
    })
    return[...property]
}
const getAllByName = async(title) =>{
    const propertyName = await Property.findAll({
        where:{title},
            include:    [
                {model: Category,},
            ],
        
    },)
    return [...propertyName]
}

module.exports = {
    getAll,
    getAllByName
}