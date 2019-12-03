const {Schema,model} = require('mongoose')

const instructorSchema= new Schema({
  codigo:{
    type:String,
    required:true,
    unique:true
  },
  nombre:{
    type:String,
    required:true
  }
},
{
  timestamps:true
})

module.exports = model('Instructor',instructorSchema)
