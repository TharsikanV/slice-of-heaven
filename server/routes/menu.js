const {newPizza,getPizzas}=require('../controllers/menuItemController');
const express=require('express');

const router=express.Router();

router.post('/menu',newPizza);
router.get('/menu',getPizzas);

module.exports=router;