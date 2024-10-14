const Reservation=require('../models/Reservation');

const submitReservation= async(req,res)=>{
    const { name, contact, date,time,message,people } = req.body;

    try {
        const newReservation = new Reservation({
            name,
            contact,
            date,
            time,
            message,
            people
        });
        await newReservation.save();
        res.status(200).json({success:true,newReservation});
    } catch(err){
        res.status(500).json({err});
    }
};

const getAllReservations = async(req,res)=>{
    try {
        const reservations = await Reservation.find();
        res.status(200).json({reservations});
    } catch(err){
        res.status(500).json({err});
    }
};

module.exports={
    submitReservation,
    getAllReservations
};
