const express = require("express");
const query = require("../mysql");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { rejects } = require("assert");

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "uploads/");
  },
  filename: function (req, file, cd) {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    cd(null, filename);
  }
});

const uploads = multer({ storage: storage });

router.post("/uploads", uploads.single("file"), (req, res)=>{
  const fileName = req.file?.filename;
  res.send({ fileName: fileName || null });
})

router.get("", async (req, res)=> {
  const result = await query('book', "selectList", null);
  res.send(result);
});

router.post("", async (req, res)=> {
  const result = await query('book', "insertInfo",[
    req.body.title, 
    req.body.sub_title,
    req.body.introduction, 
    req.body.isbn, 
    req.body.writer, 
    req.body.publisher, 
    req.body.image, 
    req.body.publication_date, 
    req.body.price, 
    req.body.page])
    console.log(rejects)
  res.send(result);
});

router.get("/:id", async (req, res)=> {
  const result = await query('book', "selectById",[req.params.id]);
  res.send(result);
});

module.exports = router;