import travelModel from "../models/travel.js";

// Insert one user
export const insertTravel = async (userData) => {
	return await travelModel.create(userData)
		.then(async (travel) => {
			await travel.save();
			return travel;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all samples
export const getAllTravels = async (email) => {
	return await travelModel.find({passenger_email:email})
		.then((travel) => {
			return travel;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};


