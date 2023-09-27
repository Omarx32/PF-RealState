const {Property, Category, Location} = require ("../../db");
const cloudinary = require("cloudinary").v2
require("dotenv").config()
const {CLOUD_NAME, CLOUD_API, CLOUD_SECRET} = process.env
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API,
    api_secret: CLOUD_SECRET,
})


    async function createProperty(req, res){




    }
module.exports = createProperty;