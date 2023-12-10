const db = require("../config/db");
class activityModel{

    static async getAllactivities()
    {
        return new Promise(resolve => {
            db.query("select * from activities", [], (error, result) => {
                if(!error){
                    resolve(result)
                }else{
                    console.error("error", error)
                }
            })
        })
    }

    static async getSpecificactivity(id){
        return new Promise(resolve => {
            db.query("SELECT * FROM activities WHERE activity_id=?", [id] ,(err, res)=>{
                if(err){
                    console.log(err)
                }else{
                    resolve(res)
                }
            })
        })
    }


    static async addNewactivity( activity_name, notes){
        return new Promise(resolve => {
            db.query("INSERT INTO activities (activity_name, notes) VALUES(?, ?)", [activity_name, notes], (err, res)=>{
                if(!err){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    }

    static async deleteactivity(id){
        return new Promise(resolve => {
            db.query("DELETE FROM activities WHERE activity_id=?", [id] ,(err, res)=>{
                if(err){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
        })
    }

    static async editactivity( id, newactivityname, newnotes){
        return new Promise (resolve =>{
            try{
                const result = db.query("UPDATE activities SET activity_name=?, notes = ? WHERE activity_id = ?", [newactivityname, newnotes, id], (res, err)=>{
                if(result){
                    resolve(true)
                }else{
                    console.error(result.error);
                    resolve(false)
                }
                })
            }catch(error){
                console.error(error);
                resolve(false)
            }
        })
    }
}

module.exports = activityModel
