require("dotenv").config()
const express= require("express")
const server = require("./src/app.js")
const {conn} = require ("./src/db.js")
const {PORT} = process.env

const engine= require('ejs-mate'); 
const path= require('path')
const socketIO= require('socket.io')
const http= require('http');
const { serialize } = require("v8")
const app= http.createServer(server);

// io es un objeto que me permitirá conectarme con el cliente
const io= socketIO(app);

server.engine('ejs', engine)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'));
console.log(__dirname);

//route
server.use(require('./routes/'));

//sockets
require('./socket')(io);

//Recursos estáticos
server.use(express.static(path.join(__dirname, 'public')));


conn.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`); 
    });
  });
  