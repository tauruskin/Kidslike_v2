const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createGiftSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    imageUrl: Joi.string(),
    childId: Joi.objectId().required()
});

exports.updateGiftSchema = Joi.object({
    email: Joi.string().email(),
    subscription: Joi.string(),
    password: Joi.string(),
    token: Joi.string(),
});

exports.validateIdSchema = Joi.object({
    giftId: Joi.objectId(),
});
