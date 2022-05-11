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

// newsCenter里面的news文件夹下面的子页面
router.get("/news/page/2", (req, res) => {
    res.render("newsCenter/news/page/2.html")
})
router.get("/news/1.html", (req, res) => {
    res.render("newsCenter/news/1.html")
})
router.get("/news/42.html", (req, res) => {
    res.render("newsCenter/news/42.html")
})
router.get("/news/182.html", (req, res) => {
    res.render("newsCenter/news/182.html")
})
router.get("/news/221.html", (req, res) => {
    res.render("newsCenter/news/221.html")
})
router.get("/news/224.html", (req, res) => {
    res.render("newsCenter/news/224.html")
})
router.get("/news/233.html", (req, res) => {
    res.render("newsCenter/news/233.html")
})
router.get("/news/239.html", (req, res) => {
    res.render("newsCenter/news/239.html")
})
router.get("/news/246.html", (req, res) => {
    res.render("newsCenter/news/246.html")
})
router.get("/news/259.html", (req, res) => {
    res.render("newsCenter/news/259.html")
})
router.get("/news/272.html", (req, res) => {
    res.render("newsCenter/news/272.html")
})
router.get("/news/284.html", (req, res) => {
    res.render("newsCenter/news/284.html")
})
router.get("/news/293.html", (req, res) => {
    res.render("newsCenter/news/293.html")
})
router.get("/news/345.html", (req, res) => {
    res.render("newsCenter/news/345.html")
})
router.get("/news/361.html", (req, res) => {
    res.render("newsCenter/news/361.html")
})
router.get("/news/374.html", (req, res) => {
    res.render("newsCenter/news/374.html")
})
router.get("/news/386.html", (req, res) => {
    res.render("newsCenter/news/386.html")
})
router.get("/news/437.html", (req, res) => {
    res.render("newsCenter/news/437.html")
})



module.exports = router;