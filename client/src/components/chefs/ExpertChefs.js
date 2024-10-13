import React from 'react';

function ExpertChefs() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Meet Our Expert Chefs */}
      <div className="text-center mb-8">
        <h4 className="text-red-500 text-2xl font-bold mb-2">Expert Chefs</h4>
        <h2 className="text-3xl font-bold">Meet our expert chefs</h2>
      </div>
      
      {/* Chefs Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="../images/chef1.jpg" alt="Chef 1" className="rounded-lg w-full" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="../images/chef2.jpg" alt="Chef 2" className="rounded-lg w-full" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="../images/chef3.jpg" alt="Chef 3" className="rounded-lg w-full" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="../images/chef4.jpg" alt="Chef 4" className="rounded-lg w-full" />
        </div>
      </div>
      
      {/* Global Clients Section */}
      <div className="text-center mb-10">
        <p className="text-lg">Global 5K+ Happy Sponsors With Us</p>
      </div>
      <div className="flex justify-center space-x-6 mb-10">
        <img src="#" alt="Sponsor 1" className="h-12" />
        <img src="#" alt="Sponsor 2" className="h-12" />
        <img src="#" alt="Sponsor 3" className="h-12" />
        <img src="#" alt="Sponsor 4" className="h-12" />
        <img src="#" alt="Sponsor 5" className="h-12" />
      </div>
    </div>
  );
}

export default ExpertChefs;
