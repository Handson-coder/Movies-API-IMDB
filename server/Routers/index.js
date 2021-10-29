const router = require("express").Router();
const routerMovies = require('./routerMovies')

router.use("/movies", routerMovies);

module.exports = router;
