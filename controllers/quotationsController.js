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
        var result = await quotationModel.addNewquotation(customer, status, activity, requestDate, quotationDate, submissionDate, quotationExp, attachedFiles);
        if(result){
            res.send("added successfully")
        }else{
            res.send("added failed")
        }
    }

    static async deletequotation(req, res){
        const id = req.params.id;
        if(id){
            var result = await quotationModel.deletequotation(id);
            if(result){
                res.send("deleted successfully")
            }else{
                res.send("failed")
            }
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
        const status = req.body.status;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
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

        var request = await quotationModel.editmyQuotation( customer_id, quotation_status, activity_id, request_date, quotation_date, submission_date, quotation_explanation, attached_files, id);
        if(request){
            res.send("edited successfuly")
        }else{
            res.send("failed")
        }
        
    }
    
    
}

module.exports = quotationsController
