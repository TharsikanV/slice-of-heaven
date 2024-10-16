import React from "react";
import { FaLinkedinIn, FaFacebook, FaInstagram,FaWhatsapp, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
        
        {/* About Restaurant Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2">About Restaurant</h2>
          <p className="text-gray-400">
            Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare. Objectively repurpose stand-alone synergy via user-centric architectures.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="#" className="text-white hover:text-red-600"><FaFacebook/></a>
            <a href="#" className="text-white hover:text-red-600"><FaInstagram/></a>
            <a href="#" className="text-white hover:text-red-600"><FaLinkedinIn/></a>
            <a href="#" className="text-white hover:text-red-600"><FaWhatsapp/></a>
            <a href="#" className="text-white hover:text-red-600"><FaTwitter/></a>
          </div>
        </div>

        {/* Our Menu Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2">Our Menu</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Chicken Burger</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Brief Pizza</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Fresh Vegetable</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sea Foods</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Indian Kabab</a></li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2">Recent Posts</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNZMWHRf5nvU8qbm0er7lPC6xDX4sHOCQFw&s" alt="Post Image" className="w-12 h-12 object-cover rounded-md" />
              <div>
                <a href="#" className="text-gray-400 hover:text-white">10 Reasons To Do A Digital Detox Challenge</a>
                <p className="text-sm text-gray-500"><i className="far fa-calendar-alt"></i> 21 June, 2023</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img src="https://img.freepik.com/premium-photo/pizza-sits-table-with-other-foods-it_1085346-161978.jpg" alt="Post Image" className="w-12 h-12 object-cover rounded-md" />
              <div>
                <a href="#" className="text-gray-400 hover:text-white">New Restaurant Town Our Pie Award Contract</a>
                <p className="text-sm text-gray-500"><i className="far fa-calendar-alt"></i> 22 June, 2023</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Now Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2">Contact Now</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt text-red-600"></i>
              <span className="ml-2 text-gray-400">1403 Washington Ave, New Orleans, LA 70130, United States</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone text-red-600"></i>
              <span className="ml-2 text-gray-400">+1 123 455 7890</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone text-red-600"></i>
              <span className="ml-2 text-gray-400">+1 098 765 4321</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-red-600"></i>
              <span className="ml-2 text-gray-400">info@sliceofheaven.com</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-red-600"></i>
              <span className="ml-2 text-gray-400">info.example@sliceofheaven.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-gray-800 py-6 mt-8 mx-7 rounded-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
          <p className="text-white text-lg mb-4 md:mb-0">Subscribe Our Newsletter</p>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              className="bg-gray-700 text-white p-2 w-full md:w-64 rounded-l-lg border-none focus:outline-none"
              placeholder="Email Address"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-r-lg">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex text-gray-500 text-sm py-4 px-7">
        <p className=" text-left w-1/2">Copyright © 2023 Themeholy. All Rights Reserved.</p>
        <p className=" text-right w-1/2">
          <a href="#" className="hover:underline">Privacy Policy</a> |
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
