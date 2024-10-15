import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
const DownloadAppSection = () => {
  return (
    <section className="relative h-full bg-cover bg-center py-32 mx-10 rounded-xl"
      style={{
        backgroundImage: "url('https://i0.wp.com/chichospizza.com/wp-content/uploads/2023/11/Modern-Download-App-Instagram-Post-Website.png?resize=1366%2C768&ssl=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="relative container mx-auto text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Download food app</h2>
        <p className="text-xl text-gray-600 mb-6">Order today</p>

        <div className="flex-1">


          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition"
            >
              <IoLogoGooglePlaystore />
              <span>Download from Google Play</span>
            </a>

            <a
              href="#"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition"
            >
              <FaApple />
              <span>Download from App Store</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
        </div>
      </div>
    </section>

  );
};

export default DownloadAppSection;
