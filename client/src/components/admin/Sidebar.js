// import { Link, useNavigate } from 'react-router-dom';
// import { NavDropdown } from 'react-bootstrap';

// export default function Sidebar() {
//   const navigate = useNavigate();
  
//   return (
//     <div className="w-full md:w-1/5 h-screen bg-gray-800 text-white">
//       <nav className="flex flex-col p-4 space-y-4">
//         <ul className="space-y-4">
//           {/* Dashboard */}
//           <li>
//             <Link to="/admin/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//               <i className="fas fa-tachometer-alt"></i>
//               <span>Dashboard</span>
//             </Link>
//           </li>

//           {/* Product Dropdown */}
//           <li>
//             <NavDropdown
//               title={
//                 <div className="flex items-center space-x-2">
//                   <i className="fa fa-product-hunt"></i>
//                   <span>Product</span>
//                 </div>
//               }
//               className="hover:bg-gray-700 p-2 rounded cursor-pointer"
//             >
//               <NavDropdown.Item 
//                 onClick={() => navigate('/admin/products')}
//                 className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded text-white"
//               >
//                 <i className="fa fa-shopping-basket"></i>
//                 <span>All</span>
//               </NavDropdown.Item>
//               <NavDropdown.Item 
//                 onClick={() => navigate('/admin/products/create')}
//                 className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded text-white"
//               >
//                 <i className="fa fa-plus"></i>
//                 <span>Create</span>
//               </NavDropdown.Item>
//             </NavDropdown>
//           </li>

//           {/* Orders */}
//           <li>
//             <Link to="/admin/orders" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//               <i className="fa fa-shopping-basket"></i>
//               <span>Orders</span>
//             </Link>
//           </li>

//           {/* Users */}
//           <li>
//             <Link to="/admin/users" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//               <i className="fa fa-users"></i>
//               <span>Users</span>
//             </Link>
//           </li>

//           {/* Reviews */}
//           <li>
//             <Link to="/admin/reviews" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//               <i className="fa fa-star"></i>
//               <span>Reviews</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const navigate = useNavigate();
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);
  };

  return (
    <div className="w-full md:w-1/5 h-screen bg-gray-800 text-white">
      <nav className="flex flex-col p-4 space-y-4">
        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <Link to="/admin/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Product Dropdown */}
          <li>
            <button
              onClick={toggleProductDropdown}
              className="flex items-center space-x-2 w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              <i className="fa fa-product-hunt"></i>
              <span>Menus</span>
            </button>
            {isProductOpen && (
              <ul className="ml-4 space-y-2">
                <li>
                  <Link 
                    to="/admin/products"
                    className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded text-white"
                  >
                    <i className="fa fa-shopping-basket"></i>
                    <span>All</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/admin/products/create"
                    className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded text-white"
                  >
                    <i className="fa fa-plus"></i>
                    <span>Create</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Orders */}
          <li>
            <Link to="/admin/orders" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <i className="fa fa-shopping-basket"></i>
              <span>Reservations</span>
            </Link>
          </li>

          {/* Users */}
          <li>
            <Link to="/admin/users" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <i className="fa fa-users"></i>
              <span>Users</span>
            </Link>
          </li>

          {/* Reviews */}
          <li>
            <Link to="/admin/reviews" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <i className="fa fa-star"></i>
              <span>Reviews</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
