const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwt');
async function registerAdmin(req, res) {
    try {
        const { name, email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ msg: 'Admin already exists' });
        }

        const newAdmin = new Admin({ name, email, password });

        const salt = await bcrypt.genSalt(10);

        newAdmin.password = await bcrypt.hash(password, salt);

        await newAdmin.save();

    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
}

async function loginAdmin(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter email and password' });
        }
        else {
            const admin = await Admin.findOne({ email }).select('+password');
            if (!admin) {
                return res.status(400).json({ msg: 'Inalid email or password' });
            }
            const isMatch = await admin.isValidPassword(password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid email or password' });
            }
            sendToken(admin,200,res);
        }


    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
async function logoutAdmin(req, res){
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    .status(200)
    .json({
        msg:"You have been logged out"
    })
}

module.exports = {
    registerAdmin,
    loginAdmin,
    logoutAdmin,
}