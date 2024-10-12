const mongoose= require('mongoose');

const adminSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter a name']
    },
    email: {
        type: String,
        required: [true,'Please enter email'],
        unique: true
    },
    password: {
        type: String,
        required:[true,'Please enter password'],
        select:false
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date,
    },
    {
        timestamps: true
    }
)
const AdminModel=mongoose.model('Admin',adminSchema);

module.exports=AdminModel;