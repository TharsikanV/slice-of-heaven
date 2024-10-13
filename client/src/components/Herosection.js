import React from 'react';

function HeroSection() {
    return (
        
        <section className="relative h-screen bg-cover bg-center py-32" style={{ backgroundImage: "url('/images/pizza.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative container mx-auto text-left">
          <h1 className="text-5xl text-white font-bold mb-5">Welcome to Pizza With Love</h1>
          <p className="text-4xl text-white font-bold tracking-wide">
            GET BEST QUALITY FOOD FROM US
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition">
            Explore Menu
          </button>
        </div>
      </section>

    );
}

export default HeroSection;