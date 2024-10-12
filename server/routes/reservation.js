const express=require('express');
const { submitReservation,getAllReservations } = require('../controllers/reservationController');
const router=express.Router();

router.post('/reservation',submitReservation);
router.get('/reservation',getAllReservations);
module.exports = router;