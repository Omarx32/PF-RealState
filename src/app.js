const express = require("express");
const passport = require('passport');
const session = require('express-session');
const {passports} = require('./routes/AuthWithGoogle/AuthWithGoogle.js');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require('helmet');
const mercadopago = require("mercadopago");
const mercadopagoRoutes = require("./routes/mercadopago/mercadopago.js");
const routes = require("./routes/index.js");
require("./db.js");

const server = express();


server.name = "API";

server.use(helmet());
server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(session({ secret: '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', resave: true, saveUninitialized: true }));
server.use(passport.initialize());
server.use(passport.session());
server.use("/", routes);


server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


mercadopago.configure({
  access_token:
    "TEST-2664276290314152-091023-a8dbce86749b18cb2960e492a1d25bea-1476921582",
});

// Manejo de errores global
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = server;

