const express=require('express');
const { submitReservation,getAllReservations } = require('../controllers/reservationController');
const isAuthenticatedUser = require('../middlewares/authenticate');
const router=express.Router();

router.post('/reservation',submitReservation);
router.get('/reservation',isAuthenticatedUser,getAllReservations);
module.exports = router;