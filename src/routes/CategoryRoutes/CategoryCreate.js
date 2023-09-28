const express = require('express');
const { handleCreateCategory } = require('../../handlers/CategoryHandler/CategoryHandler') 
const router = express.Router();

router.post('/category', handleCreateCategory);

module.exports = router;

const express = require('express');
const { handleCreateCategory } = require('../../handlers/CategoryHandler/CategoryHandler') 
const router = express.Router();

router.post('/category', handleCreateCategory);

module.exports = router;