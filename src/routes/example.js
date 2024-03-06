const express = require("express");
const router = express.Router();

const exampleController = require("../app/controllers/ExampleController");

// exampleController.index();

router.get("/:param1", exampleController.getExample);
router.get("/", exampleController.index);

module.exports = router;
