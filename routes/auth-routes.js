const express = require("express")
const router = express()
const authController = require("../controllers/auth-controller")
const { validateWithzod, registerSchema, loginSchema } = require("../middlewares/validator")

router.post('/register', validateWithzod(registerSchema), authController.register)
router.post('/login', validateWithzod(loginSchema), authController.login)

router.get('/current-user',authController.currentUser)


//exports
module.exports = router