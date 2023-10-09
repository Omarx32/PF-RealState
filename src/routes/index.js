const express = require("express");
const router = express.Router();
const passport = require('passport');

const createProperty = require("./PropertyRoutes/Create");
const category = require("./CategoryRoutes/CategoryCreate");
const location= require("./LocationRoutes/LocationCreate")
const filterRoutes= require("./FilterRoutes/FilterRoutes");
const createUserHandler = require('./UsersRoutes/UsersRoutes');


router.use("/property", createProperty);
router.use("/allcategories", category);
router.use("/allLocations", location)
router.use("/filter", filterRoutes);
router.use("/user", createUserHandler)
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Manejar la redirección después de la autenticación exitosa
  res.redirect('/home');
});

module.exports = router;
