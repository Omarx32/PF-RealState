const createProperty = require("../../controllers/PropertyC/CreateNewRent");

const createPropertyH = async (req, res) =>{
    const form = req.body
try {
    const response = await createProperty(form)
    res.status(200).json(response)
<<<<<<<<< Temporary merge branch 1
}catch (error) {
    res.status(404).json({ message: "Failed to create", error: error.message });
  }
=========
} catch (error) {
    console.error(error);
    res.status(404).json({message: "Failed to create"})
}
>>>>>>>>> Temporary merge branch 2
}


module.exports = createPropertyH;