const express = require('express');
const router = express.Router();

const createProperty = require("./PropertyRoutes/Create");
const category = require("./CategoryRoutes/CategoryCreate");
const location = require ('./LocationRoutes/LocationCreate')
const filterCat= require("./FilterRoutes/FilterRoutes")

router.use("/property", createProperty);
router.use("/allcategories", category);
router.use('/allLocations', location)
router.use("/filtCat", filterCat);


module.exports = router;
