"use client";

import React, { useState, useRef } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    // Simulated form submission
    setTimeout(() => {
      alert(`Email submitted: ${email}`);
      setIsLoading(false);
      setEmail(''); // Clear the input field after submission
    }, 2000);
  };

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}
    >
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12"> {/* Added md:pr-12 for spacing */}
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                {"Votre expert en cheminées et poêles sur mesure"}
              </h1>
              {/* Form styling for better visibility and elegance */}
              <form className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <input
                  required
                  type="email"
                  value={email}
                  ref={inputRef}
                  autoComplete="email"
                  placeholder="dupont@hotmail.fr"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="w-full py-3 px-6 text-lg leading-5 text-white font-medium bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-lg shadow-sm"
                  type="submit"
                  disabled={isLoading}
                >
                  Demander un devis gratuitement
                  {isLoading && (
                    <span className="loading loading-spinner loading-xs ml-2"></span>
                  )}

                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-4 lg:px-12"> {/* Adjusted padding for larger screens */}
              <div className="relative mx-auto md:mr-0 max-w-full">
                <img
                  className="absolute z-10 -left-14 -top-12 w-28 lg:w-36 xl:w-48"
                  src="image/circle3.svg"
                  alt="Yellow Circle"
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 lg:w-36 xl:w-48"
                  src="image/dots.svg"
                  alt="Blue Dots"
                />
                <img
                  className="relative w-full h-auto rounded-2xl object-cover"
                  src="/image/realisations/img11.jpeg"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;