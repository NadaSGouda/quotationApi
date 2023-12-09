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
        if (arname, enname, activity, address, phone, notes) {
            try {
                var result = await customerModel.addNewCustomer(arname, enname, activity, address, phone, notes);        
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
    

   static async deleteCustomer(req, res) {
        const id = req.params.id;
      
        if (id) {
          try {
            const result = await customerModel.deleteCustomer(id);
      
            if (result) {
              res.status(200).json({ status: 'success', message: 'Deleted successfully' });
            } else {
              res.status(400).json({ status: 'error', message: 'Deletion failed' });
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
          }
        } else {
          res.status(400).json({ status: 'error', message: 'Invalid request: Missing ID'});
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

   static async editCustomer(req, res) {
        const id = req.params.id;
        const newarname = req.body.customer_arname;
        const newenname = req.body.customer_enname;
        const newactivityid = req.body.activity_id;
        const newaddress = req.body.customer_address;
        const newphone = req.body.customer_phone;
        const newnotes = req.body.notes;
      
        if (id) {
          try {
            const result = await customerModel.editCustomer(id, newarname, newenname, newactivityid, newaddress, newphone, newnotes);
      
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
          res.status(400).json({ status: 'error', message: 'Invalid request: Missing ID or updated data' });
        }
    }
}

module.exports = customersController
