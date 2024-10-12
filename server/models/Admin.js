const mongoose= require('mongoose');

const adminSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date,
    },
    {
        timestamps: true
    }
)
module.exports=mongoose.model('Admin',adminSchema);