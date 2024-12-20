import React, { useState } from 'react';
import { Leaf, Home, Car, Bike, ShoppingBag, Plane, BarChart2, PieChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg from "./assets/Images/home_page_bg.jpg";

const AccurateTrackingV3 = () => {
  const [activeCategory, setActiveCategory] = useState('home');
  const [formData, setFormData] = useState({
    electricity: '',
    heating: '',
    carMileage: '',
    carFuelType: '',
    bikeMileage: '',
    meatConsumption: '',
    flights: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      electricity: '',
      heating: '',
      carMileage: '',
      carFuelType: 'gasoline',
      bikeMileage: '',
      meatConsumption: '',
      flights: '',
    });
  };

  const categories = [
    { id: 'home', name: 'Home', icon: <Home className="h-6 w-6" /> },
    { id: 'car', name: 'Car', icon: <Car className="h-6 w-6" /> },
    { id: 'bike', name: 'Bike', icon: <Bike className="h-6 w-6" /> },
    { id: 'food', name: 'Food', icon: <ShoppingBag className="h-6 w-6" /> },
    { id: 'flight', name: 'Flight', icon: <Plane className="h-6 w-6" /> },
  ];

  return (
    <div
      className="min-h-screen w-screen h-screen flex flex-col relative bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black absolute top-0 right-0 left-0 w-full h-full bg-opacity-45">
        <header className="top-0 bg-black bg-opacity-30 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center hover:text-green-400 transition-colors cursor-pointer">
              <Leaf className="mr-2" />
              CarbonTrack
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-green-400 cursor-pointer">Home</Link>
                </li>
                <li>
                  <Link to = '/AboutUs' className="hover:text-green-400 cursor-pointer">About</Link>
                </li>
                <li>
                  <Link to="/contact_us" className='hover:text-green-400 cursor-pointer'>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Accurate Carbon Footprint Tracking</h1>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-white">
            Track your carbon footprint with precision. Our advanced tools help you measure and understand your impact on the environment, including detailed calculations for various aspects of your lifestyle.
          </p>

          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mx-auto" style={{ width: '80%', maxWidth: '800px' }}>
            <div className="flex mb-8 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center px-4 py-2 mr-4 rounded-full ${
                    activeCategory === category.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1">
              {activeCategory === 'home' && (
                <>
                  <div>
                    <label htmlFor="electricity" className="block text-sm font-medium text-gray-700">
                      Monthly Electricity Usage (kWh)
                    </label>
                    <input
                      type="number"
                      id="electricity"
                      name="electricity"
                      value={formData.electricity}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="heating" className="block text-sm font-medium text-gray-700">
                      Monthly Heating Usage (therms)
                    </label>
                    <input
                      type="number"
                      id="heating"
                      name="heating"
                      value={formData.heating}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                    />
                  </div>
                </>
              )}

              {activeCategory === 'car' && (
                <>
                  <div>
                    <label htmlFor="carMileage" className="block text-sm font-medium text-black">
                      Monthly Car Mileage
                    </label>
                    <input
                      type="number"
                      id="carMileage"
                      name="carMileage"
                      value={formData.carMileage}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="carFuelType" className="block text-sm font-medium text-black">
                      Car Fuel Type
                    </label>
                    <select
                      id="carFuelType"
                      name="carFuelType"
                      value={formData.carFuelType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                    >
                      <option value="" disabled>Select the type of fuel for your car</option>
                      <option value="gasoline" className='text-black'>Gasoline</option>
                      <option value="diesel" className='text-black'>Diesel</option>
                      <option value="electric" className='text-black'>Electric</option>
                      <option value="hybrid" className='text-black'>Hybrid</option>
                    </select>
                  </div>
                </>
              )}

              {activeCategory === 'bike' && (
                <div>
                  <label htmlFor="bikeMileage" className="block text-sm font-medium text-black">
                    Monthly Bike Mileage
                  </label>
                  <input
                    type="number"
                    id="bikeMileage"
                    name="bikeMileage"
                    value={formData.bikeMileage}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                  />
                </div>
              )}

              {activeCategory === 'food' && (
                <div>
                  <label htmlFor="meatConsumption" className="block text-sm font-medium text-black">
                    Weekly Meat Consumption (lbs)
                  </label>
                  <input
                    type="number"
                    id="meatConsumption"
                    name="meatConsumption"
                    value={formData.meatConsumption}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                  />
                </div>
              )}

              {activeCategory === 'flight' && (
                <div>
                  <label htmlFor="flights" className="block text-sm font-medium text-black">
                    Number of Flights (per year)
                  </label>
                  <input
                    type="number"
                    id="flights"
                    name="flights"
                    value={formData.flights}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                  />

                  <label htmlFor="flights" className='block text-sm font-medium text-black'>
                    Type of Flight
                  </label>

                   <select
                      id="type_of_flight"
                      name="type_of_flight"
                      value={formData.type_of_flight}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black p-2"
                    >
                       <option value="default">Select the type of flight</option> 
                      <option value="short hault" className='text-black'>Short Hault</option>
                      <option value="long hault" className='text-black'>Long Hault</option>
                    </select> 


                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                >
                  Submit <ArrowRight className="inline h-4 w-4 ml-1" />
                </button>
              </div>
            </form>
          </div>

          {/* <footer className=" text-center text-white py-4 mt-5">
          <p>© 2024 CarbonTrack. All rights reserved.</p>
        </footer> */}

        </main>

        
      </div>
    </div>
  );
};

export default AccurateTrackingV3;
