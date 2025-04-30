const express = require("express");
const router = express.Router();

router.get("", function(req,res) {res.send("dept 전체조회"); });
router.post("", function(req, res) { res.send("dept 등록"); });

router.get("/:id", function(req,res) {res.send("dept 단건조회"); });
router.put("/:id", function(req, res) {res.send("dept 수정"); });
router.delete("/:id", function(req, res) {res.send("dept 삭제"); });

module.exports = router;