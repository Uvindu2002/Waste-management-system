import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-[#F6F1E5] min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center mt-28">
          <h1 className="text-4xl md:text-6xl font-bold text-[#41A64F]">
            Welcome to IV Waste Management
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl mt-4">
            Leading the Way in Sustainable Waste Solutions for 20 Years
          </p>
          <button className="mt-8 bg-[#F4B400] text-white font-bold py-2 px-6 rounded hover:bg-yellow-500 transition">
            Explore Our Services
          </button>
        </div>

        <div className="mt-12 flex justify-center space-x-10">
          <div className="flex flex-col items-center">
            <img
              src="https://unsplash.com/photos/person-riding-excavator-jVWoGDply3Q"
              alt="Worker"
              className="w-48 h-48"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1522805712022-334d9f1e93c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0M3wwfDF8c2VhcmNofDF8fHdhc3RlJTIwY29sbGVjdGlvbnxlbnwwfHx8fDE2OTAyMTQ0NTM&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Worker with Bag"
              className="w-48 h-48"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1555685813-f0a9bff9bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0M3wwfDF8c2VhcmNofDI0fHxjb21wb3N0aW5nfGVufDB8fHx8MTY5MDIxNDc4Nw&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Worker with Recycle"
              className="w-48 h-48"
            />
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#41A64F]">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-2">
            We provide the best waste management solutions to keep the environment clean and green.
          </p>
        </div>

        <div className="flex justify-center space-x-10">
          {/* Service 1 */}
          <div className="bg-[#F6F1E5] p-8 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://images.unsplash.com/photo-1583815230222-6f2a4f1b153b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0M3wwfDF8c2VhcmNofDF8fHJlY3ljbGluZ3xlbnwwfHx8fDE2OTAyMTQxMDA&ixlib=rb-1.2.1&q=80&w=1080" 
              alt="Recycling Service"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#41A64F]">Recycling Service</h3>
            <p className="text-gray-600 mt-4">
              Our recycling services ensure that reusable materials are efficiently processed and transformed into new products.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#F6F1E5] p-8 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://images.unsplash.com/photo-1522805712022-334d9f1e93c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0M3wwfDF8c2VhcmNofDF8fHdhc3RlJTIwY29sbGVjdGlvbnxlbnwwfHx8fDE2OTAyMTQ0NTM&ixlib=rb-1.2.1&q=80&w=1080" 
              alt="Waste Disposal"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#41A64F]">Waste Disposal</h3>
            <p className="text-gray-600 mt-4">
              We offer eco-friendly waste disposal services, minimizing the environmental impact of waste in landfills.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#F6F1E5] p-8 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://images.unsplash.com/photo-1555685813-f0a9bff9bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0M3wwfDF8c2VhcmNofDI0fHxjb21wb3N0aW5nfGVufDB8fHx8MTY5MDIxNDc4Nw&ixlib=rb-1.2.1&q=80&w=1080" 
              alt="Composting Service"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#41A64F]">Composting Service</h3>
            <p className="text-gray-600 mt-4">
              Our composting services help convert organic waste into valuable compost, enriching soil and reducing landfill waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
