const {Router} = require('express')
const router=Router()
const {getEvents,createEvents,deleteEvent,updateEvent,getEvent}=require('../controllers/eventsController')

router.route('/')
  .get(getEvents)
  .post(createEvents)

router.route('/:id')
  .delete(deleteEvent)
  .put(updateEvent)
  .get(getEvent)

module.exports=router
