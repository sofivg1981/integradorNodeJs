
const express = require ("express")
const router = express.Router()

const controllers = require ("../controllers/authController.js")

router.get ("/auth/login", controllers.getLogin)
router.post ("/auth/login", controllers. postLogin)
router.get ("/auth/register", controllers.register)
router.post ("/auth/register", controllers.postRegister)
router.get ("/auth/logout", controllers.logout)




module.exports = router