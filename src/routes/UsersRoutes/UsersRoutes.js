const express = require('express');
const { createUserHandler } = require('../../handlers/UserHandler/UserHandler'); 
const {loginUsers} = require('../../controllers/Users/LoginUsers')
const {userGoogle}=require ('../../controllers/Users/loginUsersGoogle')
const{usersGet}= require ("../../controllers/GetUsers/usersGet")

const router = express.Router();

router.post('/create', createUserHandler);
router.post('/login', loginUsers)
router.post('/googleLogin',userGoogle)
router.get ("/userget", usersGet)

module.exports = router;
