const express = require('express');
const {createResHandler, getResHandler}= require('../../handlers/ReservationHandler/ReservationHandler')

const router = express.Router()

router.post('/create', createResHandler);
router.get('/:id', getResHandler);

module.exports= router;