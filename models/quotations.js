const db = require("../config/db");
class quotationModel{

    static async getAllquotations()
    {
        return new Promise(resolve => {
            db.query("select * from quotations", [], (error, result) => {
                if(!error){
                    resolve(result)
                }else{
                    console.error("error", error)
                }
            })
        })
    }

    static async getSpecificquotation(id){
        return new Promise(resolve => {
            db.query("SELECT * FROM quotations WHERE quotation_id=?", [id] ,(err, res)=>{
                if(err){
                    console.log(err)
                }else{
                    resolve(res)
                }
            })
        })
    }
    
    static async searchQuotation(startDate, endDate, status){
        return new Promise(resolve => {
            db.query("SELECT * FROM quotations WHERE quotation_date BETWEEN ? AND ? AND quotation_status = ?", [startDate, endDate, status] ,(err, res)=>{
                if(err){
                    console.log(err)
                }else{
                    resolve(res)
                }
            })
        })
    }


    static async addNewquotation(customer, status, activity, requestDate, quotationDate, submissionDate, quotationExp, attachedFiles){
        return new Promise(resolve => {
            const result = db.query("INSERT INTO quotations (customer_id, quotation_status, employee_id, request_date, quotation_date, submission_date, quotation_explanation, attached_files) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", [customer, status, activity, requestDate, quotationDate, submissionDate, quotationExp, attachedFiles], (err, res)=>{
                if(result){
                    resolve(true)
                }else{
                    console.error(result.error);
                    resolve(false)
                }
            })
        })
    }

    static async deletequotation(id){
        return new Promise(resolve => {
            db.query("DELETE FROM quotations WHERE quotation_id=?", [id] ,(err, res)=>{
                if(err){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
        })
    }


    static async editmyQuotation( customer_id, quotation_status, activity_id, request_date, quotation_date, submission_date, quotation_explanation, attached_files, id){
        return new Promise (resolve =>{
            const result = db.query("UPDATE quotations SET customer_id=?, quotation_status = ?, activity_id = ?, request_date =?, quotation_date = ?, submission_date = ?, quotation_explanation =?, attached_files =?  WHERE quotation_id = ?", [customer_id, quotation_status, activity_id, request_date, quotation_date, submission_date, quotation_explanation, attached_files, id], (res, err)=>{
                if(result){
                    resolve(true)
                }else{
                    console.error(result.error);
                    resolve(false)
                }
            })
            
        })
    }

    
    
}

module.exports = quotationModel
