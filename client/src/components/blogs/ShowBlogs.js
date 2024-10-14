import React from 'react';
export default function ShowBlogs() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-red-500 font-bold">Blog & News</p>
                <h3 className="text-center text-3xl font-bold text-gray-800">Get Update Our Foods</h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNZMWHRf5nvU8qbm0er7lPC6xDX4sHOCQFw&s"
                            alt="Blog 1"
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm">
                                <span className="mr-4">16 July, 2023</span>
                                <span>3 Comments</span>
                            </p>
                            <h4 className="mt-2 text-xl font-semibold text-gray-700">
                                New Restaurant Town Our Pie Award Contract
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Statement underscores the value of thinking outside the box and pursuing visionary.
                            </p>
                            <a href="#" className="mt-4 inline-block text-red-600 font-semibold hover:underline">
                                Read More →
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://img.freepik.com/premium-photo/pizza-sits-table-with-other-foods-it_1085346-161978.jpg"
                            alt="Blog 2"
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm">
                                <span className="mr-4">17 July, 2023</span>
                                <span>3 Comments</span>
                            </p>
                            <h4 className="mt-2 text-xl font-semibold text-gray-700">
                                Innovative Hot Cheesy Raw Pasta Make Creator.
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Statement underscores the value of thinking outside the box and pursuing visionary.
                            </p>
                            <a href="#" className="mt-4 inline-block text-red-600 font-semibold hover:underline">
                                Read More →
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://dminteriors.lk/wp-content/uploads/2024/04/Pizza-Shop-Interior-Design-Ideas-4.jpg"
                            alt="Blog 3"
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm">
                                <span className="mr-4">21 July, 2023</span>
                                <span>3 Comments</span>
                            </p>
                            <h4 className="mt-2 text-xl font-semibold text-gray-700">
                                Best Hot Cheesy Raw in Pasta Making Trick.
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Statement underscores the value of thinking outside the box and pursuing visionary.
                            </p>
                            <a href="#" className="mt-4 inline-block text-red-600 font-semibold hover:underline">
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}