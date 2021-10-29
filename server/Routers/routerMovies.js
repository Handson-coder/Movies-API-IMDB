const router = require("express").Router();
const ControllerMovies = require("../Controllers/ControllerMovies");

router.get("/", ControllerMovies.findAllPopularMovies);
router.get("/:id", ControllerMovies.detailMovie);

module.exports = router;
