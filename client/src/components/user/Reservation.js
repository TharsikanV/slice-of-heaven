import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    people: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData((preve) => {
      return {
        ...preve,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/reservation`;

    try {
      const response = await axios.post(URL, formData);
      console.log(response.data.success);
      if (response.data.success) {
        setFormData((prevState) => {
          return {
            ...prevState,
            date: '',
            time: '',
            people: '',
            message: ''
          }

        });
        toast("Submited Reservation", {
          position: "top-center",
          type: 'success',
        })
      }
    } catch (error) {
      console.error('Error:', error);
      toast("Reservation Failed", {
        position: "top-center",
        type: 'error',
      })


    }
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 py-10" >
      {/* Reservation Section */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-cover h-full" style={{ backgroundImage: "url('/images/pizza2.webp')" }}>
        {/* Left*/}
        <div
          className="w-full lg:w-1/2 rounded-r-full border-r-4 pl-5 pr-10 py-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizza.jpg')" }}
        >
          <p className="text-2xl text-left font-bold mb-3 text-red-600">Booking Table</p>
          <h3 className="text-3xl text-left font-bold mb-5 text-white">Make a Reservation</h3>


          <form className="space-y-6 mr-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-white"
                  required
                />
              </div>


              <div>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-white"
                  placeholder="Your Name"
                  required
                />
              </div>


              <div>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-white"
                  placeholder="Your Contact"
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
                className="border border-gray-300 rounded-lg p-3 w-full bg-white"
                placeholder="Total Guests"
                required
              />
            </div>


            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full bg-white"
                rows="3"
                placeholder="Write Message"
              ></textarea>
            </div>


            <div>
              <button
                type="submit"
                className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600 transition w-full md:w-auto"
              >
                Make a Reservation
              </button>
            </div>
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