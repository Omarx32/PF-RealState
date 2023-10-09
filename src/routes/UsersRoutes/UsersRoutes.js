const express = require('express');
const { createUserHandler, getUsersHandler } = require('../../handlers/UserHandler/UserHandler'); 

const router = express.Router();

router.post('/create', createUserHandler);
router.get('/getAll', getUsersHandler);

module.exports = router;
