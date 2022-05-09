const express = require("express");
const router = express.Router();
const Cases=require("../model/cases")

router.get('/cases', async(req, res) => {
   var name=req.query;
let caselist = await Cases.findOne({_id:'6278eba4c58e9d572866f225'})
   console.log(caselist);
    res.render("cases/cases.html",{ caselist });
});

module.exports = router;

