const express = require("express");
const query = require("../mysql");
const router = express.Router();

router.get("", async (req, res) => {
  const result = await query('board',"selectList", null);
  res.send(result);
});

router.post("", async (req, res)=>{ 
  const result = await query('board',"insertInfo",[req.body.title, req.body.writer, req.body.content]);
  res.send(result); 
});

router.get("/:id", async (req, res)=>{ 
  const result = await query('board',"selectByid",[req.params.id]);
  res.send(result); 
});

router.put("/:id", async(req, res)=>{ 
  const data = req.body;
  const result = await query('board',"updateInfo",[data,req.params.id]);
  res.send(result); 
});

router.delete("/:id", async(req, res)=>{ 
  const result = await query('board',"deleteInfo", [req.params.id]);
  res.send(result); 
});

module.exports = router;