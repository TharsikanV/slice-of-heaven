import React from "react";

const DownloadAppSection = () => {
  return (
    // <div className="bg-white py-10 h-full">
    //   <div className="bg-blue-100 container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10 px-6 md:px-12">
        
    //     {/* Text Section */}
    //     <div className="flex-1">
    //       <h2 className="text-3xl font-bold text-gray-800 mb-4">Download food app</h2>
    //       <p className="text-xl text-gray-600 mb-6">Order today</p>

    //       <div className="flex space-x-4 space-y-4">
    //         {/* Google Play Button */}
    //         <a
    //           href="#"
    //           className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition"
    //         >
    //           <img src="/path-to-google-play-icon.svg" alt="Google Play" className="h-6" />
    //           <span>Download from Google Play</span>
    //         </a>

    //         {/* App Store Button */}
    //         <a
    //           href="#"
    //           className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition"
    //         >
    //           <img src="/path-to-app-store-icon.svg" alt="App Store" className="h-6" />
    //           <span>Download from App Store</span>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Image Section */}
    //     <div className="flex-1 flex justify-center items-center">
    //       <img
    //         src="/path-to-food-app-image.png" 
    //         alt="Food App Screenshot"
    //         className="w-full h-auto max-w-md md:max-w-lg rounded-lg shadow-lg"
    //       />
    //     </div>

    //   </div>
    // </div>
    <section className="relative h-full bg-cover bg-center py-32" style={{ backgroundImage: "url('/images/pizza.jpg')" }}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    <div className="relative container mx-auto text-left">
      {/* Text Section */}
      <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Download food app</h2>
          <p className="text-xl text-gray-600 mb-6">Order today</p>

          <div className="flex space-x-4 space-y-4">
            {/* Google Play Button */}
            <a
              href="#"
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition"
            >
              <img src="/path-to-google-play-icon.svg" alt="Google Play" className="h-6" />
              <span>Download from Google Play</span>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition"
            >
              <img src="/path-to-app-store-icon.svg" alt="App Store" className="h-6" />
              <span>Download from App Store</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/path-to-food-app-image.png" 
            alt="Food App Screenshot"
            className="w-full h-auto max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
    </div>
  </section>

  );
};

export default DownloadAppSection;
