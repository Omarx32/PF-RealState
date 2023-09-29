const express = require('express');
const router = express.Router();

const createProperty = require("./PropertyRoutes/Create");
const category = require("./CategoryRoutes/CategoryCreate");
const location= require("./LocationRoutes/LocationCreate")
const filterRoutes= require("./FilterRoutes/FilterRoutes")


router.use("/property", createProperty);
router.use("/allcategories", category);
router.use("/allLocations", location)
router.use("/filter", filterRoutes);



module.exports = router;
