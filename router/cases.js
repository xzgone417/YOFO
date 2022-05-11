const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Cases = require("../model/cases")


router.get('/cases', async (req, res) => {
   var name = req.query;
   let caselist = await Cases.findOne({
      href: name.bzlist
   });
   let type = await Cases.where("type").eq(name.bzlist)
   console.log(caselist);
   console.log(type);
   res.render("cases/cases.html", {
      caselist,
      type
   });
});


module.exports = router;