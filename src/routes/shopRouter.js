const express = require ("express")
const router = express.Router()

const shopControllers = require ("../controllers/shopController.js")

router.get ("/", shopControllers.shop)
router.get ("/item/:id", shopControllers.item)
router.post ("/item/:id/add", shopControllers.addItem)
router.get ("/cart", shopControllers.getcart)
router.post ("/cart", shopControllers.postCart)



module.exports = router