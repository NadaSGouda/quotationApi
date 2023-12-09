const db = require("../config/db");
class employeeModel{

    static async getAllemployees()
    {
        return new Promise(resolve => {
            db.query("select * from employees", [], (error, result) => {
                if(!error){
                    resolve(result)
                }else{
                    console.error("error", error)
                }
            })
        })
    }

    static async getSpecificemployee(id){
        return new Promise(resolve => {
            db.query("SELECT * FROM employees WHERE employee_id=?", [id] ,(err, res)=>{
                if(err){
                    console.log(err)
                }else{
                    resolve(res)
                }
            })
        })
    }


    static async addNewemployee( employee_name, notes){
        return new Promise(resolve => {
            db.query("INSERT INTO employees (employee_name) VALUES(?)", [employee_name], (err, res)=>{
                if(!err){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    }

    static async deleteemployee(id){
        return new Promise(resolve => {
            db.query("DELETE FROM employees WHERE employee_id=?", [id] ,(err, res)=>{
                if(err){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
        })
    }

    static async editEmployee( id, newemployeename){
        return new Promise (resolve =>{
            db.query("UPDATE employees SET employee_name=? WHERE employee_id = ?",[newemployeename, id], (res, err)=>{
                if(!err){
                    resolve(true)
                }else{
                    console.log(err);
                    resolve(false)
                }
            })
        })
    }
}

module.exports = employeeModel
