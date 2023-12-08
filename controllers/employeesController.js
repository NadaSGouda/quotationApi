const employeeModel = require("../models/employees");
class employeesController{

    static async getAllemployees(req, res){
        var result = await employeeModel.getAllemployees();
        if(result){
            res.send(result)
        }
    }

    static async addNewEmployee(req, res){
        var employee_name = req.body.employee_name;
        var result = await employeeModel.addNewemployee(employee_name);
        if(result == true){
            res.send("added successfully")
        }else{
            res.send("added failed")
        }
    }

    static async deleteemployee(req, res){
        const id = req.params.id;
        if(id){
            var result = await employeeModel.deleteemployee(id);
            if(result){
                res.send("deleted successfully")
            }else{
                res.send("failed")
            }
        }
    }

    static async getSpecificemployee(req, res){
        const id = req.params.id;
        if(id){
            var result = await employeeModel.getSpecificemployee(id);
            if(result){
                res.send(result)
            }
        }
    }

    static async editEmployee(req, res){
        const id = req.params.id;
        const newEmployeename = req.body.employee_name;

        var result = await employeeModel.editEmployee( newEmployeename, id);
        if(result){
            res.send("activity edited successfully")
        }else{
            res.send("failed")
        }
    }
}

module.exports = employeesController
