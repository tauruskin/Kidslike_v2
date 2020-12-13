const { Router } = require("express");
const { authorize } = require("../helpers/auth/token_verify");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
const {
  createGift,
  getGifts,
  getGiftById,
  updateGift,
  deleteGift,
} = require("./gifts.controller");
const { validate } = require("../helpers/validate");
const {
  createGiftSchema,
  updateGiftSchema,
  validateIdSchema,
} = require("./gifts.schemes");

const router = Router();

// CRUD

// 1. C - Create
router.post(
  "/",
  authorize,
  validate(createGiftSchema),
  asyncWrapper(createGift)
);

// 2. R - Read
router.get("/", authorize, asyncWrapper(getGifts));
router.get(
  "/:giftId",
  authorize,
  validate(validateIdSchema, "params"),
  asyncWrapper(getGiftById)
);

// // 3. U - Update
router.patch(
  "/:giftId",
  authorize,
  validate(validateIdSchema, "params"),
  validate(updateGiftSchema),
  asyncWrapper(updateGift)
);

// 4. D - Delete
router.delete(
  "/:giftId",
  authorize,
  validate(validateIdSchema, "params"),
  asyncWrapper(deleteGift)
);

exports.giftsRouter = router;
