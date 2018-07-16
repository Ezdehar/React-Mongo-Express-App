const router = require("express").Router();
const articleController = require("/Users/ezdeharjaber/Documents/cwru/React-Mongo-Express-App/controllers/articleController.js");

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
