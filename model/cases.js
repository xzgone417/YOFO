const mongoose = require('mongoose');

const casesScheme = mongoose.Schema({
    cases_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name:{
        type: String,
    },
    class:{
        type:[{name:String,link:String,img:[String]}],
    }
})


const Cases = mongoose.model("cases", casesScheme, "cases")
module.exports = Cases;

