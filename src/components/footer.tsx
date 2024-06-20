"use client";

import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-white">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <a
            href="https://www.material-tailwind.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 text-xl font-semibold"
          >
            Cheminées du Nord
          </a>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fa-brands fa-twitter text-lg" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fa-brands fa-youtube text-lg" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fa-brands fa-instagram text-lg" />
            </button>
          </div>
        </div>
        <p className="text-center mt-12 font-normal text-gray-700">
          &copy; {CURRENT_YEAR} Made with{" "}
          <a
            href="https://www.material-tailwind.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Material Tailwind
          </a>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Alexandru Pop
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;