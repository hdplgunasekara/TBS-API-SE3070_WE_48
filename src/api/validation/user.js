
const Joi = require('joi');


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


module.exports = {validateLocalPassenger};