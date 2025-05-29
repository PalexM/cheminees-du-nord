"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  
  // Refs pour les animations au scroll
  const sectionRef = useRef(null);
  
  useEffect(() => {
      if (!window.IntersectionObserver) return;
      
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate-in');
                  }
              });
          },
          { threshold: 0.2 }
      );
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
      
      return () => elements.forEach(el => observer.unobserve(el));
  }, []);

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
      ref={sectionRef}
      className="relative bg-white overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24"
      style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0 animate-on-scroll opacity-0 translate-y-8 duration-700" style={{ transitionDelay: '100ms' }}>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
              Votre expert en <span className="font-medium border-b-4 border-amber-400 pb-1 inline-block">cheminées et poêles </span> 
               &nbsp;sur mesure
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
             { "  Des solutions de chauffage élégantes, écologiques et économiques pour votre intérieur. Profitez de l'expertise de nos artisans qualifiés. "}
            </p>
            
            <form className="w-full max-w-md space-y-5 bg-white p-6 rounded-2xl shadow-xl">
              {notification && (
                <div className={`bg-${notification.type === 'success' ? 'green' : 'red'}-50 border-l-4 border-${notification.type === 'success' ? 'green' : 'red'}-600 rounded-lg text-${notification.type === 'success' ? 'green' : 'red'}-700 p-4 shadow-md`} role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {notification.type === 'success' ? (
                        <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">{notification.message}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  required
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 py-3 px-4 text-base font-medium text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                  type="submit"
                  onClick={(e) => handleSubmit(e as any, '/demandeAppel')}
                  disabled={isLoading}
                >
                  {isLoading ? 'En cours...' : 'Être rappelé'}
                  {isLoading ? (
                    <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  )}
                </button>
                <button
                  className="flex-1 py-3 px-4 text-base font-medium text-white bg-green-600 hover:from-emerald-600 hover:to-green-700 rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                  type="button"
                  onClick={() => window.location.href = 'tel:+33658285756'}
                >
                  Appeler maintenant
                  <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-6/12 pl-0 md:pl-8 lg:pl-12 animate-on-scroll opacity-0 translate-x-8 duration-1000" style={{ transitionDelay: '300ms' }}>
            <div className="relative mx-auto md:mr-0 md:ml-auto">
              <div className="absolute z-10 -left-10 -top-10 w-24 lg:w-36 xl:w-40 animate-pulse-slow">
                <Image 
                  src="/image/circle3.svg" 
                  width={160} 
                  height={160} 
                  alt="Élément décoratif" 
                />
              </div>
              <div className="absolute z-10 -right-8 -bottom-8 w-24 lg:w-32 xl:w-36 animate-pulse-slower">
                <Image 
                  src="/image/dots.svg" 
                  width={144} 
                  height={144} 
                  alt="Élément décoratif"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image/realisations/img11.jpeg"
                  alt="Installation de cheminée par Cheminées du Nord"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-6 px-5">
                  <p className="text-white font-medium drop-shadow-lg">
                    Des réalisations uniques adaptées à votre intérieur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-in {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
        }
        
        .duration-700 {
            transition-duration: 700ms;
        }
        
        .duration-1000 {
            transition-duration: 1000ms;
        }
        
        .translate-y-8 {
            transform: translateY(32px);
        }
        
        .translate-x-8 {
            transform: translateX(32px);
        }
        
        .opacity-0 {
            opacity: 0;
        }
        
        .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
                transform: translateY(0);
            }
            50% {
                opacity: 0.7;
                transform: translateY(-5px);
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
