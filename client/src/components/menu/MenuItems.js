import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MenuItems() {
  const [selectedCategory, setSelectedCategory] = useState('Beef Burger');
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 5 rows per column = 10 items total (2 columns)

  // Fetch menu items from the backend API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`, { withCredentials: true }); // Replace with your API endpoint
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching the menu items', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Pagination logic 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center">
        <h4 className="text-2xl font-bold text-red-500 mb-2">Best Food Menu</h4>
        <h2 className="text-3xl font-bold mb-6">Our Best Foods Menus</h2>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-6 mb-10">
        <button
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Beef Burger' ? 'bg-red-500 text-white' : 'bg-white'}`}
          onClick={() => handleCategoryClick('Beef Burger')}
        >
          <img src="../images/pizza.jpg" alt="Beef Burger" className="mx-auto mb-2" />
          <p className="font-bold">Veg Pizza</p>
        </button>
        <button
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Chicken Pizza' ? 'bg-red-500 text-white' : 'bg-white'}`}
          onClick={() => handleCategoryClick('Chicken Pizza')}
        >
          <img src="../images/pizza.jpg" alt="Chicken Pizza" className="mx-auto mb-2" />
          <p>Chicken Pizza</p>
        </button>
        <button
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Fresh Pasta' ? 'bg-red-500 text-white' : 'bg-white'}`}
          onClick={() => handleCategoryClick('Fresh Pasta')}
        >
          <img src="../images/pizza.jpg" alt="Fresh Pasta" className="mx-auto mb-2" />
          <p>BBQ Chicken Pizza</p>
        </button>
        <button
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Hot Sushi' ? 'bg-red-500 text-white' : 'bg-white'}`}
          onClick={() => handleCategoryClick('Hot Sushi')}
        >
          <img src="../images/pizza.jpg" alt="Hot Sushi" className="mx-auto mb-2" />
          <p>Pepperoni Pizza</p>
        </button>
        <button
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Drink & Juice' ? 'bg-red-500 text-white' : 'bg-white'}`}
          onClick={() => handleCategoryClick('Drink & Juice')}
        >
          <img src="../images/pizza.jpg" alt="Drink & Juice" className="mx-auto mb-2" />
          <p>Buffalo Pizza</p>
        </button>
      </div>

      {/* Food Menu List */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Link
              key={item.id}
              to={`/food-detail/${item.id}`}
              className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition"
            >
              <div className="flex items-center justify-between">
                <img
                  src={item.imageUrl || '../images/pizza.jpg'}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-red-500 font-bold">★★★★☆ {item.reviews} Reviews</p>
                </div>
                <p className="text-pink-500 font-bold">${item.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading menu items...</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
