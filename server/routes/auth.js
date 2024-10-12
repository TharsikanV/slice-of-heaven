const {registerAdmin,loginAdmin}=require('../controllers/authController');
const express=require('express');

const router=express.Router();

router.post('/register',registerAdmin);
router.get('/login',loginAdmin);

module.exports=router;