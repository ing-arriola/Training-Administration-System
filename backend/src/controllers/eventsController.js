const eventsCtrl={}
const Event=require('../models/Event')

eventsCtrl.getEvents= async(req,res) => {
  const eventos= await Event.find()
  res.json(eventos)
}

eventsCtrl.createEvents= async(req,res) => {
  const {codigo,aula,instructor,date}= req.body
  const newEvent=new Event({
    codigo:codigo,
    aula:aula,
    instructor:instructor,
    date:date
  })
  await newEvent.save()

  res.json('Evento guardado')
}

eventsCtrl.getEvent= async(req,res) => {
  const evento=await Event.findById(req.params.id)
  res.json(evento)
}

eventsCtrl.deleteEvent= async(req,res) => {
  const evento=await Event.findByIdAndDelete(req.params.id)
  res.json({mess:"evento borrado"})
}

eventsCtrl.updateEvent= async(req,res) => {
  const {codigo,aula,instructor,date}= req.body
  await Event.findOneAndUpdate({_id:req.params.id},{
    codigo,
    aula,
    instructor,
    date
  })
  res.json('Evento actualizado')
}

module.exports =eventsCtrl
