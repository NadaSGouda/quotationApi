const activityModel = require("../models/activities");
class activitiesController{

    static async getAllactivities(req, res){
        var result = await activityModel.getAllactivities();
        if(result){
            res.send(result)
        }
    }

    static async addNewactivity(req, res){
        var activity_name = req.body.activity_name;
        var notes = req.body.notes;
        var result = await activityModel.addNewactivity(activity_name, notes);
        if(result == true){
            res.send("added successfully")
        }else{
            res.send("added failed")
        }
    }

    static async deleteactivity(req, res){
        const id = req.params.id;
        if(id){
            var result = await activityModel.deleteactivity(id);
            if(result){
                res.send("deleted successfully")
            }else{
                res.send("failed")
            }
        }
    }

    static async getSpecificactivity(req, res){
        const id = req.params.id;
        if(id){
            var result = await activityModel.getSpecificactivity(id);
            if(result){
                res.send(result)
            }
        }
    }

    static async editactivity(req, res){
        const id = req.params.id;
        const newactivityname = req.body.activity_name;
        const newnotes = req.body.notes;

        var result = await activityModel.editactivity( newactivityname, newnotes, id);
        if(result){
            res.send("activity edited successfully")
        }else{
            res.send("failed")
        }
    }
}

module.exports = activitiesController
