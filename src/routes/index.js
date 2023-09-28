const express = require('express');
const router = express.Router();

const createProperty = require("./PropertyRoutes/Create");
const category = require("./CategoryRoutes/CategoryCreate")



router.use("/property", createProperty);
router.use("/allcategories", category)


module.exports = router;
