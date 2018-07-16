const router = require("express").Router();
const articleController = require("/Users/ezdeharjaber/Documents/cwru/React-Mongo-Express-App/controllers/nytController.js");

// Matches with "/api/nyt"
router
  .route("/")
  .get(articleController.findAll);

module.exports = router;
