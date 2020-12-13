const { Router } = require("express");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch")

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
router.post("/", asyncWrapper(createChild));

// 2. R - Read
router.get("/", asyncWrapper(getChilds));
router.get("/:id", asyncWrapper(getChildById));

// // 3. U - Update
router.patch("/:id", asyncWrapper(updateChild));

// 4. D - Delete
router.delete("/:id",asyncWrapper(deleteChild));

exports.childsRouter = router;
