
// import React, { useState } from 'react';

// function FoodMenu() {
//   return (
//     <div className="bg-gray-100 my-10  bg-cover bg-center" style={{ backgroundImage: "url('/images/pizza.jpg')" }}>
//       <div className="container mx-auto">
//         <h4 className="text-2xl font-bold text-red-500 mb-4 text-center">Best Food Menu</h4>
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Popular Food Items</h2>
//         <div className="grid grid-cols-4 gap-6">
//           <div className="relative bg-white rounded-lg p-4 shadow-md text-center">
//             <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">24% OFF</span>
//             <img src="../images/pizza.jpg" alt="Pasta Salad" className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="text-lg font-medium mt-4">Pasta Salad</h3>
//             <p className="text-gray-500">Chow mein fried noodles</p>
//             <p className="text-red-500 font-bold">$160.85</p>
//           </div>
//           <div className="relative bg-white rounded-lg p-4 shadow-md text-center">
//             <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">24% OFF</span>
//             <img src="../images/pizza.jpg" alt="Vegetarian" className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="text-lg font-medium mt-4">Vegetarian</h3>
//             <p className="text-gray-500">Cuisine Meal Health Food</p>
//             <p className="text-red-500 font-bold">$170.85</p>
//           </div>
//           <div className="relative bg-white rounded-lg p-4 shadow-md text-center">
//             <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">24% OFF</span>
//             <img src="../images/pizza.jpg" alt="Sushi Pizza" className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="text-lg font-medium mt-4">Sushi Pizza</h3>
//             <p className="text-gray-500">Japanese Cuisine Chicken</p>
//             <p className="text-red-500 font-bold">$120.85</p>
//           </div>
//           <div className="relative bg-white rounded-lg p-4 shadow-md text-center">
//             <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">24% OFF</span>
//             <img src="../images/pizza.jpg" alt="Chicken Pasta" className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="text-lg font-medium mt-4">Chicken Pasta</h3>
//             <p className="text-gray-500">Barbecue cuisine gyro Pasta</p>
//             <p className="text-red-500 font-bold">$100.85</p>
//           </div>
//         </div>
//         <div className="mt-12 flex justify-between items-center">
//           <div className="w-1/2 pr-8">
           
//           </div>
//           <div className="w-1/2">
//             <h3 className="text-2xl font-bold text-red-500 mb-4">About Company</h3>
//             <h4 className="text-xl font-semibold mb-2">Where quality food meets excellent service.</h4>
//             <p className="text-gray-600 mb-4">It's the perfect dining experience where every dish is crafted with fresh, high-quality ingredients and served by friendly staff.</p>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h5 className="font-bold text-lg">Fast Foods</h5>
//                 <p className="text-sm text-gray-500">Health foods are nutrient-dense foods.</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h5 className="font-bold text-lg">Healthy Foods</h5>
//                 <p className="text-sm text-gray-500">Health foods are nutrient-dense foods.</p>
//               </div>
//             </div>

//             {/* About more button */}
//             <div className="mt-4">
//               <button className="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">About More</button>
//               <div className="mt-4">
//                 <h5 className="font-bold text-lg">Ronald Richards</h5>
//                 <p className="text-gray-500">Founder & CEO</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodMenu;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FoodMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Display 4 items per page

  // Fetch food menu items from backend API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`, { withCredentials: true });
        setMenuItems(response.data); // Assuming API returns an array of menu items
      } catch (error) {
        console.error('Error fetching the menu items', error);
      }
    };

    fetchMenuItems();
  }, []);

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
    <div className="bg-gray-100 my-10 bg-cover bg-center" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-delicious-pizza-poster-background-image_148086.jpg')" }}>
      <div className="container mx-auto">
        <h4 className="text-2xl font-bold text-red-500 mb-4 text-center">Best Food Menu</h4>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Popular Food Items</h2>

        {/* Food Menu Grid */}
        <div className="grid grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <div key={item.id} className="relative bg-white rounded-lg p-4 shadow-md text-center">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  {item.discount}% OFF
                </span>
              )}
              <img src={item.imageUrl || '../images/pizza.jpg'} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-medium mt-4">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-red-500 font-bold">${item.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center items-center">
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

        {/* About Company Section */}
        <div className="mt-12 flex justify-between items-center">
          <div className="w-1/2 pr-8">
            {/* Placeholder for additional content if needed */}
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-bold text-red-500 mb-4">About Company</h3>
            <h4 className="text-xl font-semibold mb-2">Where quality food meets excellent service.</h4>
            <p className="text-gray-600 mb-4">It's the perfect dining experience where every dish is crafted with fresh, high-quality ingredients and served by friendly staff.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-lg">Fast Foods</h5>
                <p className="text-sm text-gray-500">Health foods are nutrient-dense foods.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-lg">Healthy Foods</h5>
                <p className="text-sm text-gray-500">Health foods are nutrient-dense foods.</p>
              </div>
            </div>
            {/* About more button */}
            <div className="mt-4 mb-4 flex justify-center space-x-5">
              <button className="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">About More</button>
              <div className="mt-4">
                <h5 className="font-bold text-lg">Ronald Richards</h5>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
