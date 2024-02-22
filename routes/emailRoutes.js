const { register } = require("../controller/emailController")

const router = require("express").Router()

router.post("/send-email", register)
module.exports = router