// 下载的那些中间件看package.json。没有的自行下载
const express = require("express");//引入express框架

const router = require("./router")

const path = require("path")//引入第三方中间件
const bodyParser = require("body-parser")//引入第三方中间件
const mongoose = require("mongoose")//引入第三方中间件，
const expressSession = require("express-session")//引入第三方中间件
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
app.use(bodyParser.urlencoded({ extended: false }))
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
    console.log("3000端口已启用")
})