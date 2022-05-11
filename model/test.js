const mongoose = require("mongoose")

const testScheme = mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\w+@\w+\.\w+(\.\w+)?$/.test(v);
            },
            message: "邮箱格式不正确"
        },
        required: [true, '邮箱不能为空']
    },
    nickname: {
        type: String,
        required: [true, '用户名不能为空'],
        minlength: [4, '最小长度为4'],
        maxlength: [10, '最大长度为10']
    },
    password: {
        type: String,
        required: [true, "密码不能为空"]
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-default.png'
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date,
        default: Date.now
    }
})

const Test = mongoose.model("test", testScheme, "tests")
module.exports = Test;