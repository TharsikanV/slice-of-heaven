const {
    newPizza,
    getPizzas,
    editPizza,
    deletePizza}=require('../controllers/menuItemController');
const express=require('express');

const router=express.Router();

router.post('/menu',newPizza);
router.get('/menu',getPizzas);
router.put('/menu/:id',editPizza);
router.delete('/menu/:id',deletePizza);

module.exports=router;