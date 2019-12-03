const express=require('express')
const cors=require('cors')
const app=express()

//Configuraciones
app.set('port',4000)

//MiddleWares
app.use(cors())
app.use(express.json())//Para poder intercambiar dara en formato JSON

//Rutas
app.use('/api/instructors',require('./routes/instructors'))
app.use('/api/events',require('./routes/events'))
app.use('/api/employees',require('./routes/employees'))
module.exports = app
