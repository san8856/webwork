const express = require("express");
const query = require("../mysql");
const router = express.Router();

router.get("", async (req, res)=> {
  const result = await query('book', "selectList", null);
  res.send(result);
});

router.post("", async (req, res)=> {
  const result = await query('book', "insertInfo",[req.body.title, req.body.introduction, req.body.isbn, req.body.writer, req.body.publisher, req.body.image, req.body.publication_date, req.body.price, req.body.page])
  res.send(result);
});

router.get("/:id", async (req, res)=> {
  const result = await query('book', "selectById",[req.params.id]);
  res.send(result);
});

module.exports = router;