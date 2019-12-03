const {Schema,model} = require('mongoose')

const eventSchema= new Schema({
  codigo:{
    type:String,
    required:true,
    unique:true
  },
  aula:{
    type:String,
    required:true
  },
  instructor:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  dateEnd:{
    type:Date,
    default:Date.now
  }
},
  {timestamps:true}
)

module.exports = model('Event',eventSchema)
