const instructorsCtrl={}
const Instructor=require('../models/Instructor')

instructorsCtrl.getInstructors= async(req,res)=>{
  const instructors=await Instructor.find()
  console.log(instructors);
  res.json(instructors)
}
instructorsCtrl.CreateInstructor=async (req,res) => {
  console.log(req.body);
  const{codigo,nombre}=req.body
  const newIns= new Instructor({
    codigo,
    nombre
  })
  await newIns.save()
  res.json("Instructor created")
}

instructorsCtrl.deleteInstructor=async (req,res) => {
  await Instructor.findByIdAndDelete(req.params.id)
  res.json({mess:"Instructor Deleted"})
}


module.exports=instructorsCtrl
