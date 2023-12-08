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
        if (employee_name) {
            try {
              var result = await employeeModel.addNewemployee(employee_name);
              if (result) {
                res.status(200).json({ status: 'success', message: 'Added successfully' });
              } else {
                res.status(400).json({ status: 'error', message: 'Add failed' });
              }
            } catch (error) {
              console.error(error);
              res.status(500).json({ status: 'error', message: 'Internal server error' });
            }
        } else {
            res.status(400).json({ status: 'error', message: 'Invalid request' });
        }
    }

     static async deleteemployee(req, res){
        const id = req.params.id;
        if (id) {
            try {
                var result = await employeeModel.deleteemployee(id);
              if (result) {
                res.status(200).json({ status: 'success', message: 'Deleted successfully' });
              } else {
                res.status(400).json({ status: 'error', message: 'Delete failed' });
              }
            } catch (error) {
              console.error(error);
              res.status(500).json({ status: 'error', message: 'Internal server error' });
            }
        } else {
            res.status(400).json({ status: 'error', message: 'Invalid request' });
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

        if (id, newEmployeename) {
            try {
                var result = await employeeModel.editEmployee( newEmployeename, id);
              if (result) {
                res.status(200).json({ status: 'success', message: 'Updated successfully' });
              } else {
                res.status(400).json({ status: 'error', message: 'Update failed' });
              }
            } catch (error) {
              console.error(error);
              res.status(500).json({ status: 'error', message: 'Internal server error' });
            }
        } else {
            res.status(400).json({ status: 'error', message: 'Invalid request' });
        }
    }
}

module.exports = employeesController
