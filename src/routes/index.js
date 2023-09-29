const express = require('express');
const router = express.Router();

const createProperty = require("./PropertyRoutes/Create");
const category = require("./CategoryRoutes/CategoryCreate");
const filterCat= require("./FilterRoutes/FilterRoutes")
const getProperty = require('../handlers/PropertyH/PropertyHand')

router.get('get', getProperty)
router.use("/property", createProperty);
router.use("/allcategories", category);
router.use("/filtCat", filterCat);


module.exports = router;
