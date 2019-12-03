const { Router } = require('express')
const router=Router()
const {getEmployees,createEmployees,getEmployee}=require('../controllers/employeeController')

router.route('/')
  .get(getEmployees)
  .post(createEmployees)

router.route('/:id')
  .get(getEmployee)

module.exports=router
