export default function Reservation(){
    return (
        <div className="bg-gray-100 py-10" >
          {/* Reservation Section */}
          <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-cover h-full" >
            {/* Left*/}
            <div className="w-full lg:w-1/2 rounded-r-full border-r-4 pl-5 pr-10" style={{ backgroundImage: "url('/images/pizza.jpg')" }}>
               
               <h5 className="text-2xl font-bold mb-6 text-red-600">Booking Table</h5>
              <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <input type="date" className="border-gray-300 rounded-lg p-2 w-full" />
                  </div>
                  <div >
                    <label className="block text-sm font-medium mb-2">Select Time</label>
                    <input type="time" className="border-gray-300 rounded-lg p-2 w-full" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Total Guests</label>
                  <input type="number" className="border-gray-300 rounded-lg p-2 w-full" placeholder="Number of Guests" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Write Message</label>
                  <textarea className="border-gray-300 rounded-lg p-2 w-full" rows="3" placeholder="Any special requests or message"></textarea>
                </div>
                <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition">Make a Reservation</button>
              </form>
            </div>
    
            {/* Right */}
            <div className="hidden lg:block w-full lg:w-1/2 pl-8">
              {/* <img src="../images/salad.jpg" alt="Salad Dish" className="rounded-lg shadow-lg w-full" /> */}
            </div>
          </div>
        </div>
      );
}