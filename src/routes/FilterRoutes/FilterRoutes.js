const express = require('express');
const filterByCatHandler= require("../../handlers/FilterHandlers/FilterByCatHandler")
const filterByLocHandler = require('../../handlers/FilterHandlers/FilterByLocHandler')
const router = express.Router();

router.get("/location", filterByLocHandler);

router.get("/", filterByCatHandler);

module.exports=router;