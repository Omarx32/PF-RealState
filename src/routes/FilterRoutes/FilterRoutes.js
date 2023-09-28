const express = require('express');
const filterByCatHandler= require("../../handlers/FilterHandlers/FilterByCatHandler")
const router = express.Router();

router.get("/", filterByCatHandler);

module.exports=router;