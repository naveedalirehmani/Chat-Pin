const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageSchema = new schema({
    text:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    }
},{ timestamps: true })

const message = mongoose.model('message',messageSchema);

module.exports = message;