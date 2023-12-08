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
router.post("/deleteCustomer", customerController.deleteCustomer)
router.get("/getSpecificCustomer", customerController.getSpecificCustomer)
router.post("/editCustomer", customerController.editCustomer)

router.get("/activities", activitiesController.getAllactivities)
router.post("/addActivity", activitiesController.addNewactivity)
router.post("/deleteActivity", activitiesController.deleteactivity)
router.get("/getSpecificActivity", activitiesController.getSpecificactivity)
router.post("/editActivity", activitiesController.editactivity)

router.get("/employees", employeesController.getAllemployees)
router.post("/addEmployee", employeesController.addNewEmployee)
router.post("/deleteEmployee", employeesController.deleteemployee)
router.get("/getSpecificEmployee", employeesController.getSpecificemployee)
router.post("/editEmployee", employeesController.editEmployee)

router.get("/quotations", quotationsController.getAllquotations)
router.post("/addQuotation", quotationsController.addNewquotation)
router.post("/deleteQuotation", quotationsController.deletequotation)
router.get("/getSpecificQuotation", quotationsController.getSpecificquotation)
router.post("/editQuotation", quotationsController.editQuotation)
router.get("/searchQuotation", quotationsController.searchQuotation)

module.exports = router;