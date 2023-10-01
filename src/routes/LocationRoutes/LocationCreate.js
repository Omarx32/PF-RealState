const express = require('express');
const { handleCreateLocation } = require('../../handlers/LocationHandler/LocationHandler') 
const router = express.Router();

router.post('/location', handleCreateLocation);

module.exports = router;
const express = require('express');
const { handleCreateLocation, getLocation } = require('../../handlers/LocationHandler/LocationH') 
const router = express.Router();

router.post('/location', handleCreateLocation);
router.get('/get', getLocation)

module.exports = router;