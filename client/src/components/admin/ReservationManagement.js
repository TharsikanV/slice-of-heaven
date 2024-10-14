
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ReservationManagement() {
  const [reservations, setReservations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusUpdate, setStatusUpdate] = useState('');

  // Fetch reservations from the backend
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reservation`,{ withCredentials: true });
        setReservations(response?.data?.reservations);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  // Handle search query input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Handle reservation status update
  const handleStatusChange = async (reservationId, newStatus) => {
    try {
      const response=await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reservation/${reservationId}`, {
        status: newStatus
      },{ withCredentials: true });

      toast(response?.data?.msg, {
        position: "top-center",
        type: 'success',
      })
      const updatedReservations = reservations.map((reservation) =>
        reservation._id === reservationId ? { ...reservation, status: newStatus } : reservation
      );
      setReservations(updatedReservations);
    } catch (error) {

      toast(error?.response?.data?.msg || 'Something went wrong', {
        position: "top-center",
        type: 'error',
      })
    }
  };
console.log(reservations);
  // Filter reservations based on search query
  const filteredReservations = (reservations || []).filter((reservation) =>
    (reservation.customerName?.toLowerCase() || '').includes(searchQuery?.toLowerCase() || '') ||
    (reservation.contactInfo?.toLowerCase() || '').includes(searchQuery?.toLowerCase() || '')
  );
  
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Reservation Management</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or contact"
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Reservations List</h2>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Customer Name</th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Contact Info</th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Date</th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Time</th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Number of People</th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Status</th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-bold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={reservation._id}>
                <td className="py-2 px-4 border-b border-gray-200">{reservation.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{reservation.contact}</td>
                <td className="py-2 px-4 border-b border-gray-200">{reservation.date}</td>
                <td className="py-2 px-4 border-b border-gray-200">{reservation.time}</td>
                <td className="py-2 px-4 border-b border-gray-200">{reservation.people}</td>

                {/*          Reservation Status Dropdown */}
                <td className="py-2 px-4 border-b border-gray-200">
                  <select
                    value={reservation.status || 'pending'}
                    onChange={(e) => handleStatusChange(reservation._id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>

                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleStatusChange(reservation._id, 'cancelled')}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
