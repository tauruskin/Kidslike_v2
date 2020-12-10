const { Router } = require("express");
const {
  createChild,
  getChilds,
  getChildById,
  updateChild,
  deleteChild,
} = require("./childs.controller");

const router = Router();

// CRUD

// 1. C - Create
router.post("/", createChild);

// 2. R - Read
router.get("/", getChilds);
router.get("/:id", getChildById);

// // 3. U - Update
router.patch("/:id", updateChild);

// 4. D - Delete
router.delete("/:id", deleteChild);

exports.childsRouter = router;
