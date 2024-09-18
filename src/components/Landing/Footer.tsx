// components/Footer.tsx
import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Boncap Logo"
                width={100}
                height={40}
                className="w-12 mb-4"
              />
              <p className="text-sm text-gray-400">
                &copy; 2023 BonCap. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Renewable Energy</li>
                <li>Reforestation</li>
                <li>Clean Cooking</li>
                <li>Urban Greening</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Partnership</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Investors</li>
                <li>Project Developers</li>
                <li>Corporate Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Compony</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
