import * as Joi from 'joi';

export default Joi.object({
  DATABASE_PORT: Joi.number().required(),
});
