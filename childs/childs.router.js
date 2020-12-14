const { Router } = require("express");
const { authorize } = require("../helpers/auth/token_verify");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch")

const {
  createChild,
  getChildren,
  getChildById,
  updateChild,
  deleteChild,
} = require("./childs.controller");

const router = Router();
router.all(authorize);
// CRUD

// 1. C - Create
router.post("/", authorize, asyncWrapper(createChild));

// 2. R - Read
router.get("/", authorize, asyncWrapper(getChildren));
router.get("/:id", authorize, asyncWrapper(getChildById));

// // 3. U - Update
router.patch("/:id", authorize, asyncWrapper(updateChild));

// 4. D - Delete
router.delete("/:id",asyncWrapper(deleteChild));

exports.childsRouter = router;
