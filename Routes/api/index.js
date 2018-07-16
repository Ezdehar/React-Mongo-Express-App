const router = require("express").Router();
const articleRoutes = require("/Users/ezdeharjaber/Documents/cwru/React-Mongo-Express-App/Routes/api/articles.js");
const nytRoutes = require("/Users/ezdeharjaber/Documents/cwru/React-Mongo-Express-App/Routes/api/nyt.js");

// NYT routes
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

module.exports = router;
