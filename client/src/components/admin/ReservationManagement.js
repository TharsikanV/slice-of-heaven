// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function ReservationManagement() {
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     // Simulate fetching reservation data from backend API
//     async function fetchReservations() {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reservations`);
//         setReservations(response.data.reservations);
//       } catch (error) {
//         console.error('Error fetching reservations:', error);
//       }
//     }
//     fetchReservations();
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Reservation Management</h2>

//       <ul className="space-y-4">
//         {reservations.map((reservation, index) => (
//           <li key={index} className="border-b pb-4">
//             <p>
//               <strong>Customer:</strong> {reservation.name}
//             </p>
//             <p>
//               <strong>Contact:</strong> {reservation.contact}
//             </p>
//             <p>
//               <strong>Date & Time:</strong> {reservation.date} at {reservation.time}
//             </p>
//             <p>
//               <strong>People:</strong> {reservation.people}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReservationManagement() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await axios.get('http://localhost:5000/api/v1/reservations');
      setReservations(response.data);
    };
    fetchReservations();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reservations</h1>
      <ul className="space-y-4">
        {reservations.map((reservation) => (
          <li key={reservation._id} className="border p-4 rounded">
            <h3 className="font-bold">{reservation.customerName}</h3>
            <p>Contact: {reservation.contactInfo}</p>
            <p>Date: {new Date(reservation.reservationDate).toLocaleString()}</p>
            <p>Number of People: {reservation.numberOfPeople}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
