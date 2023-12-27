const express = require("express");
const router = express.Router();
const {
  getById,
  getByCategory,
  getRandom,
} = require("../controllers/handleJokes");

//joke by id
router.get("/byID", getById);

//joke by category
router.get("/byCategory/:category", getByCategory);

//random joke
router.get("/random", getRandom);

module.exports = router;
