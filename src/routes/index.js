const express = require("express");
const router = express.Router();

const createProperty = require("./PropertyRoutes/Create");
const category = require("./CategoryRoutes/CategoryCreate");
const location = require("./LocationRoutes/LocationCreate");
const filterRoutes = require("./FilterRoutes/FilterRoutes");
const createUserHandler = require("./UsersRoutes/UsersRoutes");
const mpRoutes = require("./MpRoutes/Mercado");
const reservationRoutes=require('./ReservationRoutes/ReservationRoutes')
>>>>>>>>> Temporary merge branch 2

router.use("/property", createProperty);
router.use("/allcategories", category);
router.use("/allLocations", location);
router.use("/filter", filterRoutes);
router.use("/user", createUserHandler);
router.use("/mp", mpRoutes);
router.use("/reservation", reservationRoutes);

>>>>>>>>> Temporary merge branch 2


module.exports = router;