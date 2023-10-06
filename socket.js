// const socketFunction=(io)=>{
//     io.on('connection', (socket)=>{
//         console.log("New user connected");
//     })
    
// }

// module.exports= socketFunction;

module.exports= io =>{
    io.on('connection', (socket)=>{
            console.log("New user connected");

            socket.on('userCoordinates', (coords)=>{
                console.log(coords);
                socket.broadcast.emit("newUserCoordinates", coords)
            } )
        })
}