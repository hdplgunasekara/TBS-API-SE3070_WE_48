import TravelService from "../service/index.js";
import  Joi from 'joi';

// Insert one user
export const insertTravel = async (request, response, next) => {
	console.log(request.body);
	const { error } =validateTravel(request.body);
		if (error){
			response.status(400).send({ message: error.details[0].message });
			next();
		}else{
	await TravelService.insertTravel(request.body)
		.then((data) => {
			// request.handleResponse.successRespond(response)(data);
			response.status(200).send({status:"Success",data:data})
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"})
			next();
		});
	}
};

// Get all samples
export const getAllTravels = async (request, response, next) => {
	await TravelService.getAllTravels(request.params.email)
		.then(async (data) => {
			// response.status(200).send({status:"Success",data:data})
			response.json(data)
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"});
			next();
		});
};



//validations

const validateTravel= (data) => {
	const schema = Joi.object({
    
	passenger_email: Joi.string()
       .label("Passenger Email")
       .required(),

	source: Joi.string()
       .label("Source")
	   .required(),

		
	});
	return schema.validate(data);
};