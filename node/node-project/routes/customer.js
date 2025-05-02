const express = require("express");
const query = require("../mysql");
const router = express.Router();



router.get("", async (req, res) => {
  const result = await query('customer',"selectList", null);
  res.send(result)
});

//req.body, req.params, req.query, req.file  -  req. 뒤에 올수있는 4가지
router.post("", async (req, res)=>{ 
  const result = await query('customer',"insertInfo",[req.body.name, req.body.email, req.body.phone]);
  res.send(result); 
});

router.get("/:id", async (req, res)=>{ 
  const result = await query('customer',"selectByid",[req.params.id]);
  res.send(result); 
});

router.put("/:id", async(req, res)=>{ 
  const data = req.body;
  const result = await query('customer',"updateInfo",[data,req.params.id]);
  res.send(result); 
});

router.delete("/:id", async(req, res)=>{ 
  const result = await query('customer',"deleteInfo", [req.params.id]);
  res.send(result); 
});

module.exports = router;
