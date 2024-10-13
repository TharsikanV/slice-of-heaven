import React from 'react';

function Offer() {
    return (
        
        <section className="relative h-full bg-cover bg-center py-32" style={{ backgroundImage: "url('/images/pizza.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative container mx-auto text-left">
          <h2 className="text-white font-bold mb-5">Today Special Offer</h2>
          <h1 className="text-5xl text-white font-bold tracking-wide">
            DELICIOUS PIZZA
          </h1>
          <h2 className="text-red-600 font-bold mb-5">THE BEST PIZZA</h2>
        </div>
      </section>

    );
}

export default Offer;