const express = require('express');
const router = express.Router();

const createProperty = require("./PropertyRoutes/Create");


router.use("/property", createProperty);


module.exports = router;
