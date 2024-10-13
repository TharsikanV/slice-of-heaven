const mongoose = require('mongoose');

const reservationSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        date:{ 
            type: Date, 
            required: true 
        },
        time:{
            type: String,
            required: true
        },
        people:{
            type: Number,
            required: true
        },
        message:{
            type: String,
            required: true
        },
        status: {
            type: String,
            default: 'Pending'
        }
    },
    { 
        timestamps: true
    }
);

const ReservationModel=mongoose.model('Reservation', reservationSchema);

module.exports=ReservationModel;