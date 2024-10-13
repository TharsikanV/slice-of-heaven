import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name:'tharsikan',
    contact:'0766413644',
    date: '',
    time: '',
    people: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL=`${process.env.REACT_APP_BACKEND_URL}/api/v1/reservation`;

    try {
      const response = await axios.post(URL, formData);
      console.log(response);
      toast('Reservation Submitted Successfully', {
        // position:toast.POSITION.BOTTOM_CENTER,
        type: 'success',
        onOpen: () => {//toaster vara error ah null aakkanum
        }
    })
      
    } catch (error) {
      console.error('Error:', error);
      toast.error(error?.response?.data?.message)
      
    }
  };

  return (
    <div className="bg-gray-100 py-10" >
      {/* Reservation Section */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-cover h-full" >
        {/* Left*/}
        <div className="w-full lg:w-1/2 rounded-r-full border-r-4 pl-5 pr-10" style={{ backgroundImage: "url('/images/pizza.jpg')" }}>

          <h5 className="text-2xl font-bold mb-6 text-red-600">Booking Table</h5>
          <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="border-gray-300 rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div >
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="border-gray-300 rounded-lg p-2 w-full"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleInputChange}
                className="border-gray-300 rounded-lg p-2 w-full"
                placeholder="Total Guests"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="border-gray-300 rounded-lg p-2 w-full"
                rows="3"
                placeholder="Write Message"
              ></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition">Make a Reservation</button>
          </form>
        </div>

        {/* Right */}
        <div className="hidden lg:block w-full lg:w-1/2 pl-8">
          {/* <img src="../images/salad.jpg" alt="Salad Dish" className="rounded-lg shadow-lg w-full" /> */}
        </div>
      </div>
    </div>
  );
}