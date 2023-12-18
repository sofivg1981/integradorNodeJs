const express = require ("express")
const router = express.Router()

const controllers = require ("../controllers/adminController.js")

router.get ("/", controllers.admin)
router.get ("/admin/create", controllers. adminCreate)
router.post ("/admin/create", controllers.postCreate)
router.get ("/admin/edit/:id", controllers.getEdit)
router.put ("/admin/edit/:id", controllers.putEdit)
router.delete ("/admin/delete/:id", controllers.deleteId)



module.exports = router