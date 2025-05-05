const express = require("express");
const query = require("../mysql");
const router = express.Router();

router.get("", async (req, res) => {
  const result = await query("comment", "selectList", null);
  res.send(result);
});

router.post("", async (req, res) => {
  const { writer, content, bid } = req.body;
  const result = await query("comment", "insertInfo", [writer, content, bid]);
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await query("comment", "selectByBid", [req.params.id]);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await query("comment", "deleteInfo", [req.params.id]);
  res.send(result);
});

module.exports = router;
