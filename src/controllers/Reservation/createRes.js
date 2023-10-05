const {Property, Reservation, Users, UsersGoogle} = require ("../../db");

const createReservation= async (month, numHuespedes, home, email, password)=>{
	if(!month || !numHuespedes || !home){
		 throw new Error("Missing required data")
	}

	const resHome= await Property.findOne({where: {title:home}})
	
	const price= resHome.dataValues.nightPrice
	const newRes= {month, price, numHuespedes}
	
	const createRes= await Reservation.create(newRes)
	
	await createRes.setProperty(resHome);

	if(email && !password){
		const userGoogle= await UsersGoogle.findOne({
			where: {email}
		});
		if(userGoogle){
			await createRes.setUsersGoogle(userGoogle);
		} else{
			throw new Error("Esta renta no pertenece a ningún usuario")
		}
	}
	if(email && password){
		const user= await Users.findOne({
			where: {email, password}
		});
		if(user){
			await createRes.setUser(user);             
		} else{
			throw new Error("Esta renta no pertenece a ningún usuario")
		}
	}

	return createRes;
}

const getAllRes= async (id)=>{
	const reservations= await Reservation.findAll();

	console.log(reservations);
	const reservationsHome=[]

	for(let i = 0; i < reservations.length; i++){
		if(reservations[i].dataValues.PropertyId===id){
			reservationsHome.push(reservations[i]);
		}
	}

	return reservationsHome;
}

module.exports= {createReservation, getAllRes}