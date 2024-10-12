const express=require('express');
const { submitReservation } = require('../controllers/reservationController');
const router=express.Router();

router.post('/reservation',submitReservation);

module.exports = router;