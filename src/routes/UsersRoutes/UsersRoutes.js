const express = require('express');
const { createUserHandler } = require('../../handlers/UserHandler/UserHandler'); 

const router = express.Router();

router.post('/create', createUserHandler);

module.exports = router;
