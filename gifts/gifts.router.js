const { Router } = require("express");
const {
  createGift,
  getGifts,
  getGiftById,
  updateGift,
  deleteGift,
} = require("./gifts.controller");

const router = Router();

// CRUD

// 1. C - Create
router.post("/", createGift);

// 2. R - Read
router.get("/", getGifts);
router.get("/:id", getGiftById);

// // 3. U - Update
router.patch("/:id", updateGift);

// 4. D - Delete
router.delete("/:id", deleteGift);

exports.giftsRouter = router;
