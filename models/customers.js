const db = require("../config/db");
class customerModel{

    static async getAllCustomers()
    {
        return new Promise(resolve => {
            db.query("select * from customers", [], (error, result) => {
                if(!error){
                    resolve(result)
                }else{
                    console.error("error", error)
                }
            })
        })
    }

    static async getSpecificCustomer(id){
        return new Promise(resolve => {
            db.query("SELECT * FROM customers WHERE customer_id=?", [id] ,(err, res)=>{
                if(err){
                    console.log(err)
                }else{
                    resolve(res)
                }
            })
        })
    }


    static async addNewCustomer(customer_arname, customer_enname, activity_id, customer_address, customer_phone, notes){
        return new Promise(resolve => {
            db.query("INSERT INTO customers (customer_arname, customer_enname, activity_id, customer_address, customer_phone, notes) VALUES(?, ?, ? ,?,?, ?)", [customer_arname, customer_enname, activity_id, customer_address, customer_phone, notes], (err, res)=>{
                if(!err){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    }

    static async deleteCustomer(id){
        return new Promise(resolve => {
            db.query("DELETE FROM customers WHERE customer_id=?", [id] ,(err, res)=>{
                if(err){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
        })
    }

    static async editCustomer( newarname, newenname, newactivityid, newaddress, newphone, newnotes, id){
        return new Promise (resolve =>{
            db.query("UPDATE customers SET customer_arname=?, customer_enname = ?, activity_id = ?, customer_address =?, customer_phone = ?, notes = ? WHERE customer_id = ?", [newarname, newenname, newactivityid, newaddress, newphone, newnotes, id], (res, err)=>{
                if(!err){
                    resolve(true)
                }
            })
        })
    }
}

module.exports = customerModel