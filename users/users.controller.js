const { serializeUser } = require("./users.serializer");



exports.getCurretUser = (req, res, next) => {
    res.status(200).send(serializeUser(req.user))
  return res.status(200).send(child);
}

