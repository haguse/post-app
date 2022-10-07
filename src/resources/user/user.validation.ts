import Joi from 'joi';

const register = Joi.object({
	name: Joi.string().max(30).min(6).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(22).required()
});

const login = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(22).required()
    
});

export default { register, login };