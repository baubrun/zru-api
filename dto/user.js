import Joi from "joi";

const ValidateDTO = class ValidateDTO {
  static getUser(params) {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      phone_number: Joi.string().allow("").allow(null),
    });

    return schema.validate(params);
  }

  static postUser(params) {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      phone_number: Joi.string().required(),
    });

    return schema.validate(params);
  }
};

export default ValidateDTO;
