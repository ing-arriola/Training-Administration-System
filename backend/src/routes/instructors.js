const { Router } = require('express')
const router=Router()
const {getInstructors,CreateInstructor,deleteInstructor}=require('../controllers/instructorsController')

router.route('/')
  .get(getInstructors)
  .post(CreateInstructor)

router.route('/:id')
  .delete(deleteInstructor)
module.exports=router
