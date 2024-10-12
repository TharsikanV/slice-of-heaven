const {newPizza,getPizzas,editPizza}=require('../controllers/menuItemController');
const express=require('express');

const router=express.Router();

router.post('/menu',newPizza);
router.get('/menu',getPizzas);
router.route('/menu/:id').put(editPizza);

module.exports=router;