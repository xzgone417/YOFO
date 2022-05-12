// "art-template": "^4.13.2",
//     "blueimp-md5": "^2.19.0",
//     "bootstrap": "^3.3.5",
//     "express": "^4.17.3",
//     "express-art-template": "^1.0.1",
//     "express-session": "^1.17.2",
//     "jquery": "^2.2.0",
//     "moment": "^2.29.3",
//     "mongoose": "^6.3.1",
//     "multer": "^1.4.4"
// 下载的那些中间件在这里
const express = require("express");
const router = require("./router")
//const cases = require("./router/cases");
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const expressSession = require("express-session")

const app = express();

//引入数据库
mongoose.connect("mongodb://localhost/YOFO")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已经连接数据库");
});

//挂载中间件 
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")))
app.use("/public", express.static(path.join(__dirname, "public")))
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
// Session插件

app.use(expressSession({
    name: "YOFO",
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 3,
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
}));


//app.use(cases);

// 这里引用router文件夹下的js文件，
app.use(router)


// 最低优先级，页面不存在
app.all('*', function (req, res) {
    res.render('404.html', {
        title: '您要找的页面不存在'
    })
});
// 错误处理中间件
app.use((err, req, res, next) => {
    res.json({
        code: 2002,
        message: err.message
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})