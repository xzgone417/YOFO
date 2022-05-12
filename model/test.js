// const mongoose = require("mongoose")

// const userScheme = mongoose.Schema({
//     email: {
//         type: String,
//         // validate: {
//         //     validator: function (v) {
//         //         return /^\w+@\w+\.\w+(\.\w+)?$/.test(v);
//         //     },
//         //     message: "邮箱格式不正确"
//         // },
//         // required: [true, '邮箱不能为空']
//     },
//     nickname: {
//         type: String,
//         // required: [true, '用户名不能为空'],
//         // minlength: [4, '最小长度为4'],
//         // maxlength: [10, '最大长度为10']
//     },
//     phonenumber: {
//         type: Number,
//     },
//     job: {
//         type: String,
//     },
//     // date: {
//     //     type: Number,
//     //     enum: [0, 1],
//     //     default: 0,
//     // },
//     // leaveword: {
//     //     type: String,
//     // }
// })

// const User = mongoose.model("user", userScheme, "user")
// module.exports = User;