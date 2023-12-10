const quotationModel = require("../models/quotations");
class quotationsController{

    static async getAllquotations(req, res){
        var result = await quotationModel.getAllquotations();
        if(result){
            res.send(result)
        }
    }

    static async addNewquotation(req, res){
        var customer = req.body.customer_id;
        var status = req.body.quotation_status;
        var activity = req.body.activity_id;
        var requestDate = req.body.request_date;
        var quotationDate = req.body.quotation_date;
        var submissionDate = req.body.submission_date;
        var quotationExp = req.body.quotation_explanation;
        var attachedFiles = req.body.attached_files;
        
        if (customer, status, activity, requestDate, quotationDate, submissionDate, quotationExp, attachedFiles) {
            try {
              var result =  quotationModel.addNewquotation(customer, status, activity, requestDate, quotationDate, submissionDate, quotationExp, attachedFiles);
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

    static async deletequotation(req, res){
        const id = req.params.id;
        if (id) {
            try {
              var result = await quotationModel.deletequotation(id);
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

    static async getSpecificquotation(req, res){
        const id = req.params.id;
        if(id){
            var result = await quotationModel.getSpecificquotation(id);
            if(result){
                res.send(result)
            }
        }
    }


    static async searchQuotation(req, res){
        const status = req.query.status;
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;
        if(startDate, endDate, status){
            var result = await quotationModel.searchQuotation(startDate, endDate, status);
            if(result){
                res.send(result)
            }
        }
    }

     static async editQuotation(req, res){
        const id = req.params.id;
        const customer_id = req.body.customer_id;
        const quotation_status = req.body.quotation_status;
        const activity_id =  req.body.activity_id;
        const request_date = req.body.request_date;
        const quotation_date = req.body.quotation_date;
        const submission_date = req.body.submission_date;
        const quotation_explanation = req.body.quotation_explanation;
        const attached_files = req.body.attached_files;

        if (id) {
            try {
              var result = await quotationModel.editmyQuotation( customer_id, quotation_status, activity_id, request_date, quotation_date, submission_date, quotation_explanation, attached_files, id);
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

module.exports = quotationsController
