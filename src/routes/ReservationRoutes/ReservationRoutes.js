const express = require('express');
const {createResHandler, getResHandler, destroyResHandlers}= require('../../handlers/ReservationHandler/ReservationHandler')

const router = express.Router()

router.post('/create', createResHandler);
router.get('/:id', getResHandler);
router.delete('/:id', destroyResHandlers);

module.exports= router;