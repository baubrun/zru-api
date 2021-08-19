import Joi from "joi";

const ValidateDTO = class ValidateDTO {
  static getProduct(params) {
    const schema = Joi.number().required();

    return schema.validate(params);
  }
};

export default ValidateDTO;
