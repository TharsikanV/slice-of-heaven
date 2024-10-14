const Reservation = require('../models/Reservation');

const submitReservation = async (req, res) => {
    const { name, contact, date, time, message, people } = req.body;

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
        res.status(200).json({ success: true, newReservation });
    } catch (err) {
        res.status(500).json({ err });
    }
};

const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json({ reservations });
    } catch (err) {
        res.status(500).json({ err });
    }
};

const updateReservation = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const reservation = await Reservation.findById(id);
        if (!reservation) {
          return res.status(404).json({ msg: 'Reservation not found' });
        }
        
        reservation.status = status;
        await reservation.save();
        
        res.status(200).json({msg:'Reservation updated successfully'});
      } catch (error) {
        res.status(500).json({ msg: 'Error updating reservation status' });
      }
};


module.exports = {
    submitReservation,
    getAllReservations,
    updateReservation
};
