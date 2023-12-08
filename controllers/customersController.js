const customerModel = require("../models/customers");
class customersController{

    static async getAllCustomers(req, res){
        var result = await customerModel.getAllCustomers();
        if(result){
            res.send(result)
        }
    }

    static async addNewCustomer(req, res){
        var arname = req.body.customer_arname;
        var enname = req.body.customer_enname;
        var activity = req.body.activity_id;
        var address = req.body.customer_address;
        var phone = req.body.customer_phone;
        var notes = req.body.notes;
        var result = await customerModel.addNewCustomer(arname, enname, activity, address, phone, notes);
        if(result == true){
            res.send("added successfully")
        }else{
            res.send("added failed")
        }
    }

    static async deleteCustomer(req, res){
        const id = req.body.id;
        if(id){
            var result = await customerModel.deleteCustomer(id);
            if(result){
                res.send("deleted successfully")
            }else{
                res.send("failed")
            }
        }
    }

    static async getSpecificCustomer(req, res){
        const id = req.params.id;
        if(id){
            var result = await customerModel.getSpecificCustomer(id);
            if(result){
                res.send(result)
            }
        }
    }

    static async editCustomer(req, res){
        const id = req.body.id;
        const newarname = req.body.customer_arname;
        const newenname = req.body.customer_enname;
        const newactivityid = req.body.activity_id;
        const newaddress = req.body.customer_address;
        const newphone = req.body.customer_phone;
        const newnotes = req.body.notes;

        var result = await customerModel.editCustomer(id, newarname, newenname, newactivityid, newaddress, newphone, newnotes);
        if(result){
            res.send("customer edited successfully")
        }else{
            res.send("failed")
        }
    }
}

module.exports = customersController
