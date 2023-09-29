const express = require('express');
const { handleCreateLocation } = require('../../handlers/LocationHandler/LocationHandler') 
const router = express.Router();

router.post('/location', handleCreateLocation);

module.exports = router;
