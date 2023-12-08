const express = require("express");
const customerController = require("../controllers/customersController");
const activitiesController = require("../controllers/activitiesController");
const employeesController = require("../controllers/employeesController");
const quotationsController = require("../controllers/quotationsController");
const router = express.Router();

router.get("/", (req, res, next)=>{
    res.send("hi")
})

router.get("/customers", customerController.getAllCustomers)
router.post("/addCustomer", customerController.addNewCustomer)
router.post("/deleteCustomer/:id", customerController.deleteCustomer)
router.get("/getSpecificCustomer/:id", customerController.getSpecificCustomer)
router.post("/editCustomer/:id", customerController.editCustomer)

router.get("/activities", activitiesController.getAllactivities)
router.post("/addActivity", activitiesController.addNewactivity)
router.post("/deleteActivity/:id", activitiesController.deleteactivity)
router.get("/getSpecificActivity/:id", activitiesController.getSpecificactivity)
router.post("/editActivity/:id", activitiesController.editactivity)

router.get("/employees", employeesController.getAllemployees)
router.post("/addEmployee", employeesController.addNewEmployee)
router.post("/deleteEmployee/:id", employeesController.deleteemployee)
router.get("/getSpecificEmployee/:id", employeesController.getSpecificemployee)
router.post("/editEmployee/:id", employeesController.editEmployee)

router.get("/quotations", quotationsController.getAllquotations)
router.post("/addQuotation", quotationsController.addNewquotation)
router.post("/deleteQuotation/:id", quotationsController.deletequotation)
router.get("/getSpecificQuotation/:id", quotationsController.getSpecificquotation)
router.post("/editQuotation/:id", quotationsController.editQuotation)
router.get("/searchQuotation", quotationsController.searchQuotation)

module.exports = router;
