const express = require('express');
const { handleCreateLocation } = require('../../handlers/LocationHandler/LocationH') 
const router = express.Router();

router.post('/location', handleCreateLocation);

module.exports = router;