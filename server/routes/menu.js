const {
    newPizza,
    getPizzas,
    editPizza,
    deletePizza}=require('../controllers/menuItemController');

const isAuthenticatedUser =require('../middlewares/authenticate');
const express=require('express');

const router=express.Router();

router.post('/menu',isAuthenticatedUser,newPizza);
router.get('/menu',getPizzas);
router.put('/menu/:id',isAuthenticatedUser,editPizza);
router.delete('/menu/:id',isAuthenticatedUser,deletePizza);

module.exports=router;