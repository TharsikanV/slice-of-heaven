// import React from 'react';
// import MenuManagement from './MenuManagement';
// import ReservationManagement from './ReservationManagement';

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <MenuManagement />
//         <ReservationManagement />
//       </div>
//     </div>
//   );
// }
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard() {
//   const dispatch = useDispatch();
  let outOfStock = 0;

//   if (products.length > 0) {
//     products.forEach((product) => {
//       if (product.stock === 0) {
//         outOfStock = outOfStock + 1;
//       }
//     });
//   }

//   let totalAmount = 0;
//   if (adminOrders.length > 0) {
//     adminOrders.forEach((order) => {
//       totalAmount += order.totalPrice;
//     });
//   }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 min-h-screen">
      <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>


        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {/* Products */}
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-lg font-semibold">Menus</p>
              <p className="text-2xl font-bold"></p>
            </div>
            <Link to="/admin/menus" className="block mt-4 text-center text-sm hover:text-green-200">
              View Details
            </Link>
          </div>

          {/* Orders */}
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-lg font-semibold">Reservations</p>
              <p className="text-2xl font-bold"></p>
            </div>
            <Link to="/admin/reservations" className="block mt-4 text-center text-sm hover:text-red-200">
              View Details
            </Link>
          </div>

          {/* Users */}
          <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-lg font-semibold">Users</p>
              <p className="text-2xl font-bold"></p>
            </div>
            <Link to="/admin/users" className="block mt-4 text-center text-sm hover:text-indigo-200">
              View Details
            </Link>
          </div>

          {/* Out of Stock */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-lg font-semibold">Out of Stock</p>
              <p className="text-2xl font-bold"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
