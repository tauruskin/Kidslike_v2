const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.CreateHabitSchema = Joi.object({
  name: Joi.string().required(),
  childId: Joi.objectId().required(),
  points: Joi.number().required(),
});

exports.UpdateHabitSchema = Joi.object({
  name: Joi.string(),
  childId: Joi.objectId(),
  points: Joi.number(),
  daysToComplete: Joi.array().length(10),
}).min(1);

exports.validateIdSchema = Joi.object({
  id: Joi.objectId(),
});
