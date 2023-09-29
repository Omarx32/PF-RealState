require("dotenv").config()
const server = require("./src/app.js")
const {conn} = require ("./src/db.js")
const {PORT} = process.env

const engine= require('ejs-mate'); 
const path= require('path')

server.engine('ejs', engine)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'));
console.log(__dirname);

server.use(require('./routes/'))

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`); 
    });
  });
  