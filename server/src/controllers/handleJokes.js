const axios = require("axios");
const { categoryOfJokes, totalJokes, URL } = require("../utils/jokesVars");

getById = async (req, res) => {
  const { id } = req.query;
  try {
    if (id && id < totalJokes) {
      let { data } = await axios(URL + "Any?idRange=" + id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).send("Not Found");
      }
    } else {
      res
        .status(416)
        .send("Debe haber un numero y debe ser menor a " + totalJokes);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

getByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    if (category && categoryOfJokes.includes(category)) {
      let { data } = await axios(URL + category);
      if (data) {
        res.json(data);
      } else {
        res.status(404).send("Not Found");
      }
    } else {
      res.status(416).send("Debe ingresar una categoria valida");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

getRandom = async (req, res) => {
  const id = Math.floor(Math.random() * 319);
  try {
    let { data } = await axios(URL + "Any?idRange=" + id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getById, getByCategory, getRandom };
