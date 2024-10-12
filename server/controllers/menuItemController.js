const MenuItem=require('../models/MenuItem');
async function newPizza(req,res){
    const { name, description, price, imageUrl } = req.body;
    try {
        const newPizza = new MenuItem(req.body);
        await newPizza.save();
        res.status(201).json({newPizza,msg:"pizza added successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    newPizza
};