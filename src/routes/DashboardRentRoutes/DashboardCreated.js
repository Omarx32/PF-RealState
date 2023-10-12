const express = require('express');
const { getMonthlyStatistics } = require('../../handlers/DashBoardHandler/DashBoardHandler') 
const {dashboardAllRentsHandler} = require ('../../handlers/DashboardAllRentsHandler/DashboardAllRentsH')
const router = express.Router();

router.get('/statistics/:month', getMonthlyStatistics);
router.get('/Allstatistics',dashboardAllRentsHandler);

module.exports = router;