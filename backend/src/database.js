const mongoose=require('mongoose')
const URI=process.env.MONGODB_URI
mongoose.connect(URI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:true
})

const connection=mongoose.connection

connection.once('open',()=>{
  console.log("conexion OK!");
})
