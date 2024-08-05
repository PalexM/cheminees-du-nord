"use client";

import React, { useState } from 'react';

const Hero = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, endpoint: string) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null); // Reset notification

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        setNotification({ message: result.message || 'Une erreur s\'est produite lors de l\'envoi de la demande.', type: 'error' });
      } else {
        setNotification({ message: 'Demande envoyée avec succès!', type: 'success' });
      }
    } catch (error: any) {
      setNotification({ message: 'Une erreur s\'est produite lors de l\'envoi de la demande.', type: 'error' });
    } finally {
      setIsLoading(false);
      setPhone('');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}
    >
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                {"Votre expert en cheminées et poêles sur mesure"}
              </h1>
              <form className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-lg">
                {notification && (
                  <div className={`bg-${notification.type === 'success' ? 'teal' : 'red'}-100 border-t-4 border-${notification.type === 'success' ? 'teal' : 'red'}-500 rounded-b text-${notification.type === 'success' ? 'teal' : 'red'}-900 px-4 py-3 shadow-md`} role="alert">
                    <div className="flex">
                      <div className="py-1">
                        <svg className={`fill-current h-6 w-6 text-${notification.type === 'success' ? 'teal' : 'red'}-500 mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold">{notification.type === 'success' ? 'Succès' : 'Erreur'}</p>
                        <p className="text-sm">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                )}
                <input
                  required
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                <div className="flex space-x-4">
                  <button
                    className="w-1/2 py-3 px-6 text-lg leading-5 text-white font-medium bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-lg shadow-sm"
                    type="submit"
                    onClick={(e) => handleSubmit(e as any, '/demandeAppel')}
                    disabled={isLoading}
                  >
                    {isLoading ? 'En cours...' : 'Demander un appel'}
                    {isLoading && (
                      <span className="loading loading-spinner loading-xs ml-2"></span>
                    )}
                  </button>
                  <button
                    className="w-1/2 py-3 px-6 text-lg leading-5 text-white font-medium bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
                    type="button"
                    onClick={() => window.location.href = 'tel:+33658285756'}
                  >
                    Appeler maintenant
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-4 lg:px-12">
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
