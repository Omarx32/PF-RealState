const express = require('express');
const { createUserHandler, getUsersHandler} = require('../../handlers/UserHandler/UserHandler'); 
const {loginUsers} = require('../../controllers/Users/LoginUsers')
const {userGoogle}=require ('../../controllers/Users/loginUsersGoogle')

const router = express.Router();

router.post('/create', createUserHandler);
router.post('/login', loginUsers)
router.post('/googleLogin',userGoogle)
router.get('/getAll', getUsersHandler);

module.exports = router;
