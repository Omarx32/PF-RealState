const {Reservation} = require("../../db")

exports.getMonthlyStatistics = async (req, res) => {
    try {
      const month = parseInt(req.params.month);
      
      const reservations = await Reservation.findAll({ 
        where: { month } // Filtrar por el mes
    });
  
      const numberOfReservations = reservations.length;
      const totalReservationPrice = reservations.reduce((total, reservation) => total + reservation.price, 0);
      const fivePercentOfTotalPrice = totalReservationPrice * 0.05;
      const totalEarnings = totalReservationPrice - fivePercentOfTotalPrice;
  
      const statistics = {
        numberOfReservations,
        totalReservationPrice,
        fivePercentOfTotalPrice,
        totalEarnings
      };
  
      res.json(statistics);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching statistics' });
    }
  };