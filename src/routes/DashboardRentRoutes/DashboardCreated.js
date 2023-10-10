const express = require('express');
const { getMonthlyStatistics } = require('../../handlers/DashBoardHandler/DashBoardHandler') 
const router = express.Router();

router.get('/statistics/:month', getMonthlyStatistics);

module.exports = router;