import React from "react";

const FoodGallery = () => {
  const foodItems = [
    { imgSrc: "/images/pizza.jpg", alt: "Grilled Chicken" },
    { imgSrc: "/images/pizza1.jpg", alt: "Roast Chicken" },
    { imgSrc: "/images/pizza.jpg", alt: "Sliced Chicken" },
    { imgSrc: "/images/pizza1.jpg", alt: "Burger" },
    { imgSrc: "/images/pizza.jpg", alt: "Pizza" },
    { imgSrc: "/images/pizza1.jpg", alt: "Egg Dish" },
    { imgSrc: "/images/pizza.jpg", alt: "Noodles" },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="gallery-scroll ">
        <div className="inline-flex space-x-4 ">
          {foodItems.map((food, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={food.imgSrc}
                alt={food.alt}
                className="h-48 w-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;
