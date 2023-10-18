const express=require('express')
const {createReviewHandler, getReviewsHomeHandler, getReviewsUserHandler, destroyReviewHandler}= require('../../handlers/ReviewHandler/ReviewHandler');
const router= express.Router();

router.post('/create', createReviewHandler);
router.get('/home/:id', getReviewsHomeHandler);
router.get('/home/user', getReviewsUserHandler);
router.delete('/delete/:id', destroyReviewHandler);

module.exports=router