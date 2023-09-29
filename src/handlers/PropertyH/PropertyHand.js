const {getAll, getAllByName} = require('../../controllers/PropertyC/PropertyCon')

const getProperty = async (req, res) =>{

    const {title} = req.query
    try {
        const response = title ? getAllByName(title) : getAll();
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({message: 'Not Found'})
        
    }
}
module.exports = getProperty