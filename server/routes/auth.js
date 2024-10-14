const {registerAdmin,loginAdmin, logoutAdmin}=require('../controllers/authController');
const express=require('express');

const router=express.Router();

router.post('/register',registerAdmin);
router.post('/login',loginAdmin);
router.get('/logout',logoutAdmin);

module.exports=router;