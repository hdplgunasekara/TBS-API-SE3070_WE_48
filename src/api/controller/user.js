import UserService from "../service/index.js";
import  Joi from 'joi';
import user from "../models/user.js";
import jwt from 'jsonwebtoken';


// Insert one user
export const insertUser = async (request, response, next) => {

	const { error } =validateLocalPassenger(request.body);
		if (error){
			response.status(400).send({ message: error.details[0].message });
			next();
		}else{
	await UserService.insertUser(request.body)
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

// Get all users
export const getAllUsers = async (request, response, next) => {
	await UserService.getAllUsers()
		.then(async (data) => {
			response.status(200).send({status:"Success",data:data})
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"});
			next();
		});
};

// Get one users
export const getOneUser = async (request, response, next) => {
	await UserService.getOneUser(request.params.id)
		.then(async (data) => {
			response.status(200).send({status:"Success",data:data})
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"});
			next();
		});
};

// login user
export const loginUser = async (request, response, next) => {
	
	await UserService.loginUser(request.body)
		.then(async (data) => {
			if(data.length>0){

	     

			const tokendetails= {email:data[0].email_address,id:data[0]._id,name:data[0].name};
			const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

			const Data = {
				accessToken: accessToken,
				email:data[0].email_address,
				id:data[0]._id,
				name:data[0].name
			}

			response.status(200).send({message:"Login Success",data:Data})
			next();
			}else{
			response.status(500).send({message:"Login Failed"})
			next();
			}
			
		})
		.catch((error) => {
			response.status(500).send({message:"Login Failed"});
			next();
		});
};






//validations

const validateLocalPassenger= (data) => {
	const schema = Joi.object({
     name: Joi.string()
        .label("Name") 
        .required(),
    
     mobile: Joi.number()
       .label("Mobile Number")
       .min(10)
       .required(),

    type: Joi.string()
       .label("User Type"),

    email_address: Joi.string()
       .label("Email Address")
       .required(),

    nic: Joi.string()
       .label("NIC")
       .required(),

     password: Joi.string()
       .label("Password")
       .min(8)
       .required(),

    
		
	});
	return schema.validate(data);
};