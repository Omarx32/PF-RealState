const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "Reservation",
        {
	        id:{
	        	type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,	
	        },
	        month:{
	        	type: DataTypes.INTEGER,
	         	allowNull: false,
            		validate: {
              		isInt: true,
              		min: 1,
              		max: 12,
            		},
  	        },
	        //reservationStatus:{
	        //	type: DataTypes.STRING,
	        //	allowNull: false,
            	//	validate: {
              	//	isIn: [['aprobada', 'pendiente', 'rechazada']],
            	//	},	
	        //},
	        price:{
	        	type:DataTypes.FLOAT,
	        	allowNull: false,
	        },
	        numHuespedes:{
	        	type:DataTypes.INTEGER,
	        	allowNull: false,
	        }
        },
	    {
            timestamps: false,
            freezeTableName: true,
        },
	);
}
