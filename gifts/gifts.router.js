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

const router = Router();

// router.all(authorize);
// CRUD

// 1. C - Create
router.post("/", asyncWrapper(createGift));

// 2. R - Read
router.get("/", authorize, asyncWrapper(getGifts));
router.get("/:id", asyncWrapper(getGiftById));

// // 3. U - Update
router.patch("/:id", updateGift);

// 4. D - Delete
router.delete("/:id", deleteGift);

exports.giftsRouter = router;
