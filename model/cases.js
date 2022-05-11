const mongoose = require('mongoose');

const casesScheme = mongoose.Schema({
    cases_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name:{
        type: String,
    },
    href:{
        type:String
    },
    type:{
        type:[String]
    },
    img:{
        type:[String]
    }
})


const Cases = mongoose.model("cases", casesScheme, "cases")
module.exports = Cases;

