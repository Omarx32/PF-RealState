const DashboardRent = require("../../controllers/DashboardRent/DashboardRent")

exports.getMonthlyStatistics = (req, res) => {
    const month = parseInt(req.params.month);
    DashboardRent.getMonthlyStatistics(req, res, month);
  };