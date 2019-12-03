const employeeCtrl={}
const Employee=require('../models/Employee')
//codigo,nombre,cc,skill
employeeCtrl.getEmployees= async(req,res) => {
  const employees= await Employee.find()
  res.json(employees)
}

employeeCtrl.createEmployees= async(req,res) => {
  const {codigo,nombre,cc,skill}= req.body
  const newEmployee=new Employee({
    codigo:codigo,
    nombre:nombre,
    cc:cc,
    skill:skill
  })
  await newEmployee.save()

  res.json('Empleado guardado')
}

employeeCtrl.getEmployee = async(req,res) => {
  const employee = await Employee.find({codigo:req.params.id})
  res.json(employee[0])
  //console.log(req.params.id);
}

module.exports=employeeCtrl
