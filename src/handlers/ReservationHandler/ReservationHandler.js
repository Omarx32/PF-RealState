const {createReservation, getAllRes}= require('../../controllers/Reservation/createRes')

const createResHandler= async (req, res)=>{
    try{
        const {month, numHuespedes, home, email, password}=req.body;
        const response= await createReservation(month, numHuespedes, home, email, password);
        res.status(200).json(response);
    } catch(error){
        console.error(error)
        res.status(400).json({ message: "Failed to create", error: error.message });
    }
}

const getResHandler= async (req, res)=>{
    try {
        const {id}=req.params;
        const response= await getAllRes(id); 
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Failed to get", error: error.message })        
    }
}

module.exports= {createResHandler, getResHandler};