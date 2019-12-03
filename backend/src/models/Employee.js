const {Schema,model} = require('mongoose')

const employeeSchema= new Schema({
  codigo:{
    type:String,
    required:true,
    unique:true
  },
  nombre:{
    type:String,
    required:true
  },
  cc:{
    type:String,
    required:true
  },
  skill:{
    type:String,
    required:true
  }
},
{
  timestamps:true
})

module.exports = model('Employee',employeeSchema)
