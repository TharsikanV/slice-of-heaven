const express=require('express');
const { submitReservation,getAllReservations, updateReservation } = require('../controllers/reservationController');
const isAuthenticatedUser = require('../middlewares/authenticate');
const router=express.Router();

router.post('/reservation',submitReservation);
router.get('/reservation',isAuthenticatedUser,getAllReservations);
router.put('/reservation/:id',isAuthenticatedUser,updateReservation);
module.exports = router;