import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuItems() {
const [selectedCategory, setSelectedCategory] = useState("Beef Burger");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center">
        <h4 className="text-2xl font-bold text-red-500 mb-2">Best Food Menu</h4>
        <h2 className="text-3xl font-bold mb-6">Our Best Foods Menus</h2>
      </div>

      <div className="flex justify-center space-x-6 mb-10">
        <button 
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Beef Burger' ? 'bg-red-500 text-white' : 'bg-white'}`} 
          onClick={() => handleCategoryClick('Beef Burger')}
        >
          <img src="../images/pizza.jpg" alt="Beef Burger" className="mx-auto mb-2"/>
          <p className="font-bold">Beef Burger</p>
        </button>
        <button 
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Chicken Pizza' ? 'bg-red-500 text-white' : 'bg-white'}`} 
          onClick={() => handleCategoryClick('Chicken Pizza')}
        >
          <img src="../images/pizza.jpg" alt="Chicken Pizza" className="mx-auto mb-2"/>
          <p>Chicken Pizza</p>
        </button>
        <button 
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Fresh Pasta' ? 'bg-red-500 text-white' : 'bg-white'}`} 
          onClick={() => handleCategoryClick('Fresh Pasta')}
        >
          <img src="../images/pizza.jpg" alt="Fresh Pasta" className="mx-auto mb-2"/>
          <p>Fresh Pasta</p>
        </button>
        <button 
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Hot Sushi' ? 'bg-red-500 text-white' : 'bg-white'}`} 
          onClick={() => handleCategoryClick('Hot Sushi')}
        >
          <img src="../images/pizza.jpg" alt="Hot Sushi" className="mx-auto mb-2"/>
          <p>Hot Sushi</p>
        </button>
        <button 
          className={`text-center p-4 rounded-lg ${selectedCategory === 'Drink & Juice' ? 'bg-red-500 text-white' : 'bg-white'}`} 
          onClick={() => handleCategoryClick('Drink & Juice')}
        >
          <img src="../images/pizza.jpg" alt="Drink & Juice" className="mx-auto mb-2"/>
          <p>Drink & Juice</p>
        </button>
      </div>

      {/* Food Menu List */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Column */}
        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        {/* Second Column */}
        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>

        <Link to="/food-detail/1" className="bg-white p-6 rounded-lg shadow-md block hover:bg-gray-100 transition">
          <div className="flex items-center justify-between">
            <img src="../images/pizza.jpg" alt="Chicken Burger" className="w-16 h-16 rounded-lg"/>
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-lg">Chicken Barger</h3>
              <p className="text-gray-500">American-inspired sushi roll</p>
              <p className="text-red-500 font-bold">★★★★☆ 4k Reviews</p>
            </div>
            <p className="text-pink-500 font-bold">$89.39</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

