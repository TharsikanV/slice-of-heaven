const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

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
    }
    },
    {
        timestamps: true
    }
)

adminSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

adminSchema.methods.isValidPassword=async function(enteredPassword){
    return bcrypt.compare(enteredPassword,this.password)
}
const AdminModel=mongoose.model('Admin',adminSchema);

module.exports=AdminModel;