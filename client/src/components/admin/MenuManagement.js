import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function MenuManagement() {
  const [pizzas, setPizzas] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });
  const [editing, setEditing] = useState(false);
  const [editPizzaId, setEditPizzaId] = useState(null);

  // Fetch pizzas from the backend
  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`);
      setPizzas(response.data); // Assuming response.data is an array of pizza objects
    };

    fetchPizzas();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        try {
          // Update existing pizza
          const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu/${editPizzaId}`, formData, { withCredentials: true });
          toast(response.data.msg, {
            position: "top-center",
            type: 'success',
          })
        } catch (error) {
          toast(error?.response?.data?.msg, {
            position: "top-center",
            type: 'error',
          })
        }

      } else {
        try {
          // Add new pizza
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`, formData, { withCredentials: true });
          toast(response.data.msg, {
            position: "top-center",
            type: 'success',
          })
        } catch (error) {
          toast(error?.response?.data?.msg, {
            position: "top-center",
            type: 'error',
          })
        }

      }
      // Reset form and fetch pizzas again
      setFormData({ name: '', description: '', price: '', imageUrl: '' });
      setEditing(false);
      setEditPizzaId(null);
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`);
      setPizzas(response.data);
    } catch (error) {
      toast(`Error saving pizza:${error}`, {
        position: "top-center",
        type: 'error',
      })
    }
  };

  /////////// Handle edit button click
  const handleEdit = (pizza) => {
    setFormData(pizza);
    setEditing(true);
    setEditPizzaId(pizza._id);
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu/${id}`, { withCredentials: true });
      const updatedPizzas = pizzas.filter((pizza) => pizza._id !== id);
      setPizzas(updatedPizzas);
    } catch (error) {
      console.error('Error deleting pizza:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Menu Management</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Pizza Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editing ? 'Update Pizza' : 'Add Pizza'}
        </button>
      </form>

      {/* <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Pizza List</h2>
        <ul className="space-y-4">
          {pizzas.map((pizza) => (
            <li key={pizza._id} className="flex justify-between items-center border-b py-2">
              <div>
                <h3 className="text-lg font-semibold">{pizza.name}</h3>
                <p>{pizza.description}</p>
                <p className="text-gray-600">Price: ${pizza.price}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(pizza)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pizza._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Pizza List</h2>
        <ul className="space-y-4">
          {pizzas.map((pizza) => (
            <li key={pizza._id} className="flex justify-between items-center border-b py-4">
              {/* Pizza Image */}
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={pizza.imageUrl} // Assuming pizza.imageUrl contains the image link
                  alt={pizza.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Pizza Details */}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{pizza.name}</h3>
                <p className="text-gray-700">{pizza.description}</p>
                <p className="text-gray-600">Price: ${pizza.price}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(pizza)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pizza._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
