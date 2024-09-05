// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#16423C] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">CarbonCred</div>
        <div className="hidden md:flex space-x-4">
          <a href="#hero" className="hover:text-gray-300">
            Home
          </a>
          <a href="#edge" className="hover:text-gray-300">
            Our Edge
          </a>
          <a href="#process" className="hover:text-gray-300">
            The Process
          </a>
          <Button className="bg-white text-[#16423C] hover:bg-opacity-80">
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block hover:text-gray-300">
              Home
            </a>
            <a href="#edge" className="block hover:text-gray-300">
              Our Edge
            </a>
            <a href="#process" className="block hover:text-gray-300">
              The Process
            </a>
            <Button className="bg-white text-[#16423C] hover:bg-opacity-80 w-full mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
