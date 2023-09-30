const { Property, Category, Location } = require("../../db");
const cloudinary = require("cloudinary").v2
require("dotenv").config()
const { CLOUD_NAME, CLOUD_API, CLOUD_SECRET } = process.env
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API,
    api_secret: CLOUD_SECRET,
})


async function createProperty(form) {
    const input = form;
    //console.log(input);
    //console.log(input);

<<<<<<< HEAD
        const{
           title,
           description,
           image,
           numBeds,
           numBaths,
           nightPrice,
           availability,
           homeCapacity,
        }= input

        if (!title || !description || !image || !numBaths || !numBeds || !nightPrice || !availability || !homeCapacity){
            throw new Error("Missing required data")
        }
        const imageUrls = [];
        for (const imageData of image){
            const result = await cloudinary.uploader.upload(imageData,{
                folder: "productsDetail"
            });
            imageUrls.push(result.secure_url)
=======
    const {
        title,
        description,
        image,
        numBeds,
        numBaths,
        nightPrice,
        availability,
        homeCapacity,
    } = input

    if (!title || !description || !image || !numBaths || !numBeds || !nightPrice || !availability || !homeCapacity) {
        throw new Error("Missing required data")
    }
    const imageUrls = [];
    for (const imageData of image) {
        const result = await cloudinary.uploader.upload(imageData, {
            folder: "productsDetail"
        });
        imageUrls.push(result.secure_url)
    }

    const newProperty = { title, description, image: imageUrls, numBaths, numBeds, nightPrice, availability, homeCapacity }

    const createdProperty = await Property.create(newProperty)

    const categorys = newProperty.Category;
    if (categorys) {
        const category = await Category.findOne({ where: { name: categorys } });
        if (!categorys) {
            throw new Error(`Category "${category}" doesn't exist`)
>>>>>>> master
        }
        await createdProperty.setCategory(category)
    }

<<<<<<< HEAD
        const newProperty = {title, description, image: imageUrls, numBaths, numBeds, nightPrice, availability, homeCapacity}

        const createdProperty = await Property.create(newProperty)

        const categorys = input.Category;

        if(categorys){
            const category = await Category.findOne({where: {name: categorys} });
            if(!category){
                throw new Error(`Category "${category}" doesn't exist`)
            }
            await createdProperty.setCategory(category)
        }

        return createdProperty
=======
    return createdProperty
>>>>>>> master
}

module.exports = createProperty;