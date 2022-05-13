// 引用模板和中间件
const express = require("express");
const People=require("../model/people")
const path = require("path")
const multer = require('multer');
const mongoose = require("mongoose");
const moment = require("moment")

const router = express.Router();

router.get("/joinus", async(req, res) => {
    let result=await People.find();
    // console.log(result)
    res.render("aboutUs/joinus.html",{person:result})
})

router.get("/dubhewer", (req, res) => {
    res.render("CT/dubhewer.html")
})
router.get("/pirox", (req, res) => {
    res.render("CT/pirox.html")
})
module.exports = router;