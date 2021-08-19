import Joi from "joi";

const ValidateDTO = class ValidateDTO {
  static postOrder(params) {
    const schema = Joi.object({
      user: Joi.string().required(),
      product: Joi.string().required(),
    });

    return schema.validate(params);
  }
};

export default ValidateDTO;
