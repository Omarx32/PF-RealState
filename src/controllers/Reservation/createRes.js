const diacriticless = require("diacriticless");
const {Property, Reservation, Users, UsersGoogle} = require ("../../db");

const createReservation= async (month, numHuespedes, idHome, email, password)=>{
	if(!month || !numHuespedes || !idHome){
		 throw new Error("Missing required data") 
	}

	const resHome= await Property.findByPk(idHome)

	


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

const getAllResHome= async (id)=>{
	const reservations= await Reservation.findAll();

	console.log(reservations);
	const reservationsHome=[]

	for(let i = 0; i < reservations.length; i++){
		if(reservations[i].dataValues.PropertyId===id){
			reservationsHome.push(reservations[i]);
		}
	}

	if(!reservationsHome.length){
		throw new Error("Esta casa no tiene reservaciones")
	}
	return reservationsHome;
}

const getAllResUser= async (UserId)=>{
	const reservations= await Reservation.findAll();

	console.log(reservations);
	const reservationsUser=[];

	for(let i = 0; i < reservations.length; i++){
		if(reservations[i].dataValues.UserId===UserId){
			reservationsUser.push(reservations[i]);
		}
	}

	if(!reservationsUser.length){
		for(let i = 0; i < reservations.length; i++){
			if(reservations[i].dataValues.UsersGoogleId===UserId){
				reservationsUser.push(reservations[i]);
			}
		}
	}

	if(!reservationsUser.length){
		throw new Error("No tienes reservaciones, de momento")	
	}

	return reservationsUser;
}

module.exports= {createReservation, getAllResHome, getAllResUser}