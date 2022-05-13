// 引用模板和中间件
const express = require("express");
// 导入model中的js例如


const Cases = require("../model/cases")
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
    res.redirect("/index")
})
router.get("/index", (req, res) => {
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

// router.get("/login", (req, res) => {
//     res.render("login.html")
// })

// router.post("/contact", async (req, res, next) => {
//     try {
//         const { nickname, email, phonenumber, job } = req.body;
//         //根据email和nickname从数据库查询邮箱或者用户名是否已存在
//         let findUser = await User.findOne({ $or: [{ email }, { nickname }] })
//         //如果存在，则返回错误信息
//         if (findUser) {
//             res.json({
//                 code: 2002,
//                 message: "用户名或者邮箱已经存在"
//             })
//         }
//         //如果不存在，则保存用户信息，注册成功，并跳转登录页面
//         else {
//             //保存用户
//             let user = new User(req.body);
//             await user.save()
//             res.json({
//                 code: 2000,
//                 message: "注册成功"
//             })
//         }
//     }
//     catch (err) {
//         next(err)
//     }
// })





module.exports = router;