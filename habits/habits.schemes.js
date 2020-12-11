const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.CreateHabitSchema = Joi.object({
    name: Joi.string().required(),
    childId: Joi.string().required(),
    points: Joi.string().required(),
    daysToComplete: Joi.array().items(Joi.string()).length(10),
});

exports.UpdateHabitSchema = Joi.object({
    name: Joi.string(),
    childId: Joi.string(),
    points: Joi.string(),
    daysToComplete: Joi.array().length(10),
}).min(1);

exports.validateIdSchema = Joi.object({
    id: Joi.objectId(),
});