// 引用模板和中间件
const express = require("express");
// 导入model中的js例如
const Test = require("../model/test")

// 挂载中间件
const path = require("path")
const multer = require('multer');
const mongoose = require("mongoose");
const moment = require("moment")
const router = express.Router();

// 渲染页面
// aboutUs
router.get("/", (req, res) => {
    res.render("index.html")
})
router.get("/about", (req, res) => {
    res.render("aboutUs/about1.html")
})
router.get("/contact", (req, res) => {
    res.render("aboutUs/contact.html")
})
router.get("/honor", (req, res) => {
    res.render("aboutUs/honor.html")
})
router.get("/joinus", (req, res) => {
    res.render("aboutUs/joinus.html")
})
router.get("/milestone", (req, res) => {
    res.render("aboutUs/milestone.html")
})
// cases
router.get("//cases?bzlist=kouqiangzhengji", (req, res) => {
    res.render("cases/cases.html")
})
// CT
router.get("/autodon", (req, res) => {
    res.render("CT/autodon.html")
})
router.get("/dubhewer", (req, res) => {
    res.render("CT/dubhewer.html")
})
router.get("/pirox", (req, res) => {
    res.render("CT/pirox.html")
})
// news
router.get("/news", (req, res) => {
    res.render("newsCenter/news.html")
})
router.get("/exhibition", (req, res) => {
    res.render("newsCenter/exhibition.html")
})
// support
router.get("/support", (req, res) => {
    res.render("support/support.html")
})
// technology
router.get("/technology", (req, res) => {
    res.render("technology/technology.html")
})
module.exports = router;