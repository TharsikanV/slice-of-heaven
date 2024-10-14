import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`;
    console.log(URL);
    try {
      const response = await axios.post(URL, formData,{ withCredentials: true });
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      toast("Login success", {
        position: "top-center",
        type: 'success',
      })
      navigate('/');
    } catch (error) {
      console.log(error.response.data.msg);
      toast(error?.response?.data?.msg || 'Something went wrong', {
        position: "top-center",
        type: 'error',
      })
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/pepperoni-pizza-black-background-hot-pepperoni-pizza-top-view-banner-generative-ai_446633-8397.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
