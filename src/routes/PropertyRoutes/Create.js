const express = require('express');
const createPropertyH = require('../../handlers/PropertyH/CreateNewRentH')
const router = express.Router()

router.post('/post', createPropertyH);


module.exports = router;