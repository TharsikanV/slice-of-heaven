const jwt=require('jsonwebtoken');
const Admin=require('../models/Admin');

const isAuthenticatedUser =async (req,res,next) => {
    const {token}=req.cookies;
    if(!token){
        return res.status(401).json({msg:'You are not logged in'});
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.admin=await Admin.findById(decoded.id);
        next();
    } catch (err){
        if(err.name==='TokenExpiredError'){
            return res.status(401).json({msg:'Token expired, please log in again'});
        }
        res.status(401).json({msg:'Invalid token, please log in again'});
    }

}

module.exports=isAuthenticatedUser;