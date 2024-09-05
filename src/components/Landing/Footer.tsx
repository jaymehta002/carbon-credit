// components/Footer.tsx
import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#16423C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CarbonCred</h3>
            <p>
              Revolutionizing carbon credit management for a sustainable future.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#hero" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#edge" className="hover:text-gray-300">
                  Our Edge
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gray-300">
                  The Process
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>Email: info@carboncred.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 CarbonCred. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
