const {newPizza}=require('../controllers/menuItemController');
const express=require('express');

const router=express.Router();

router.post('/menu',newPizza);

module.exports=router;