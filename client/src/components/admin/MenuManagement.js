// import React, { useState } from 'react';

// export default function MenuManagement() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imageUrl: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddItem = () => {
//     setMenuItems([...menuItems, formData]);
//     setFormData({
//       name: '',
//       description: '',
//       price: '',
//       imageUrl: '',
//     });
//   };

//   const handleDeleteItem = (index) => {
//     const updatedMenu = menuItems.filter((item, i) => i !== index);
//     setMenuItems(updatedMenu);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Menu Management</h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           placeholder="Pizza Name"
//           className="border-gray-300 rounded-lg p-2 w-full"
//         />
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           placeholder="Description"
//           className="border-gray-300 rounded-lg p-2 w-full"
//         />
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleInputChange}
//           placeholder="Price"
//           className="border-gray-300 rounded-lg p-2 w-full"
//         />
//         <input
//           type="text"
//           name="imageUrl"
//           value={formData.imageUrl}
//           onChange={handleInputChange}
//           placeholder="Image URL"
//           className="border-gray-300 rounded-lg p-2 w-full"
//         />
//         <button
//           onClick={handleAddItem}
//           className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 transition"
//         >
//           Add Pizza
//         </button>
//       </div>

//       <h3 className="text-lg font-bold mt-6">Pizza Menu</h3>
//       <ul className="space-y-4 mt-4">
//         {menuItems.map((item, index) => (
//           <li key={index} className="border-b pb-4">
//             <h4 className="font-bold">{item.name}</h4>
//             <p>{item.description}</p>
//             <p>${item.price}</p>
//             <img src={item.imageUrl} alt={item.name} className="w-32 mt-2" />
//             <button
//               onClick={() => handleDeleteItem(index)}
//               className="bg-red-500 text-white py-1 px-3 rounded-lg mt-2"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        // Update existing pizza
        await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu/${editPizzaId}`, formData);
      } else {
        // Add new pizza
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`, formData);
      }
      // Reset form and fetch pizzas again
      setFormData({ name: '', description: '', price: '', imageUrl: '' });
      setEditing(false);
      setEditPizzaId(null);
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`);
      setPizzas(response.data);
    } catch (error) {
      console.error('Error saving pizza:', error);
    }
  };

  // Handle edit button click
  const handleEdit = (pizza) => {
    setFormData(pizza);
    setEditing(true);
    setEditPizzaId(pizza._id); // Assuming pizza._id is the unique identifier
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu/${id}`);
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

      <div className="bg-white rounded-lg shadow-md p-6">
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
      </div>
    </div>
  );
}
