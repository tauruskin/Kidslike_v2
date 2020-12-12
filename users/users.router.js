
const { Router } = require("express");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");

const { getCurretUser } = require("./users.controller");


const router = Router();
router.get("/current", asyncWrapper(getCurretUser));


exports.userRouter = router;
