const express = require("express");
const router = new express.Router();

const SiaStore = require("../models/sia");


router.post("/sia", async (req, res) => {
  try {
    const addingStore = new SiaStore(req.body);
    console.log(req.body);
    const insertStore = await addingStore.save();
    res.status(201).send(insertStore);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/sia", async (req, res) => {
  try {
    const getStore = await SiaStore.find({});
    res.status(201).send(getStore);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
