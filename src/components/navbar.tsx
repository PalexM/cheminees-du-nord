"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  WrenchScrewdriverIcon,
  FireIcon,
  PaintBrushIcon,
  SunIcon,
  HomeModernIcon
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "Poêles et Cheminées",
    description: "Installation de Poêles et Cheminées de Qualité",
    icon: FireIcon,
    url: "/installations"
  },
  {
    title: "Conduits",
    description: "Création de Conduits sur Mesure",
    icon: WrenchScrewdriverIcon,
    url: "/conduits"
  },
  {
    title: "Nettoyage et Entretien",
    description: "Nettoyage et Entretien de Conduits et Cheminées",
    icon: PaintBrushIcon,
    url: "/entretien"
  },
  {
    title: "Réparation de Poêles",
    description: "Entretien et Réparation de Poêles pour une Performance Durable",
    icon: SunIcon,
    url: "/reparation"
  },
  {
    title: "Réfection Murs et Plafonds",
    description: "Réfection Expert des Murs et des Plafonds pour un Intérieur Parfaitement Coordonné",
    icon: HomeModernIcon,
    url: "/refection"
  },
];

// NavListMenu prend maintenant setOpenNav en prop pour pouvoir fermer le menu principal
function NavListMenu({ setOpenNav }: { setOpenNav: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Fermeture du menu desktop en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    // Ferme également le menu principal mobile
    setOpenNav(false);
  };

  return (
    <React.Fragment>
      {/* Desktop Menu - Clic seulement */}
      <div className="hidden lg:block relative" ref={menuRef}>
        <button 
          className="flex items-center gap-1 py-2 px-3 font-medium text-gray-700 hover:text-amber-500 transition-colors rounded-lg focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Services
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </button>
        
        {/* Desktop Dropdown - Centré */}
        {isMenuOpen && (
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-2 w-screen max-w-[900px] rounded-xl bg-white shadow-xl ring-1 ring-gray-200"
          >
            <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navListMenuItems.map((item, index) => (
                <Link 
                  href={item.url} 
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={handleLinkClick}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-amber-600">
                    {React.createElement(item.icon, { className: "h-5 w-5" })}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Menu Item - Centré et aligné */}
      <div className="lg:hidden w-full">
        <button 
          className="flex items-center justify-center w-full py-2 px-3 font-medium text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="flex items-center gap-1 justify-center">
            Nos Services
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-4 w-4 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
            />
          </span>
        </button>
        
        {isMobileMenuOpen && (
          <div className="space-y-2 px-4 py-2 bg-gray-50 rounded-lg">
            {navListMenuItems.map((item, index) => (
              <Link 
                href={item.url} 
                key={index}
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-amber-500 transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-amber-600">
                  {React.createElement(item.icon, { className: "h-4 w-4" })}
                </div>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Gestion du scroll et du resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fermeture du menu mobile en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && openNav) {
        setOpenNav(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openNav]);

  // Navigation items avec libellés plus courts
  const navItems = [
    { title: "Accueil", url: "/" },
    { isServices: true }, // Placeholder pour Services
    { title: "Réalisations", url: "/realisations" },
    { title: "Contact", url: "/contact" }
  ];

  // Fonction pour fermer la navbar mobile
  const handleLinkClick = () => {
    setOpenNav(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
            <div className="relative h-16 w-20">
              <Image 
                src="/image/logo_firma.png" 
                alt="Cheminées du Nord" 
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <span className="text-xl lg:text-2xl font-medium text-gray-900">
              Cheminées du Nord
            </span>
          </Link>

          {/* Desktop Navigation avec plus d'espace */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item, index) => (
              item.isServices ? (
                <NavListMenu key="services" setOpenNav={setOpenNav} />
              ) : (
                <Link 
                  key={index} 
                  href={item.url || '/'} 
                  className="relative py-2 px-3 font-medium text-gray-700 hover:text-amber-500 transition-colors rounded-lg group"
                  onClick={handleLinkClick}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-4/5 -translate-x-1/2 transition-all duration-300"></span>
                </Link>
              )
            ))}
            
            <Link href="/contact" className="ml-2 xl:ml-4" onClick={handleLinkClick}>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 xl:px-5 rounded-full shadow-sm transition-colors duration-300 flex items-center gap-2">
                Devis
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Centré */}
      {openNav && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-md mx-auto px-4 py-3 space-y-3">
            {navItems.map((item, index) => (
              item.isServices ? (
                <NavListMenu key="services" setOpenNav={setOpenNav} />
              ) : (
                <Link 
                  key={index} 
                  href={item.url || '/'} 
                  className="block py-2 px-3 text-center font-medium text-gray-700 hover:text-amber-500 transition-colors rounded-lg"
                  onClick={handleLinkClick}
                >
                  {item.title === "Accueil" ? item.title : `Nos ${item.title}`}
                </Link>
              )
            ))}
            
            <div className="pt-2 pb-1">
              <Link 
                href="/contact" 
                className="block"
                onClick={handleLinkClick}
              >
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-5 rounded-lg shadow-sm transition-colors duration-300 flex items-center justify-center gap-2">
                  Devis Gratuit
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
