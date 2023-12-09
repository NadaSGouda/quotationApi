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
        if (activity_name, notes) {
            try {
              var result = await activityModel.addNewactivity(activity_name, notes);        
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

    static async deleteactivity(req, res){
        const id = req.params.id;
        if (id) {
            try {
              var result = await activityModel.deleteactivity(id);
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
        if (id, newactivityname, newnotes) {
            try {
              var result = await activityModel.editactivity( newactivityname, newnotes, id);
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

module.exports = activitiesController
