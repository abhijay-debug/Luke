import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-800 text-white lg:stick top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="font-bold text-2xl">Luke AI</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-md font-medium">
          <li><a href="#features" className="hover:text-gray-200">Features</a></li>
          
          <li><a href="#works" className="hover:text-gray-200">How It Works</a></li>
          <li><a href="#faq" className="hover:text-gray-200">FAQ</a></li>   
          <li><a href="#feel" className="hover:text-gray-200">Benifits</a></li>
          <li><a href="#about" className="hover:text-gray-200">About Luke</a></li>
          
          <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white text-black shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <button
              className="self-end mb-6"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)}>About Luke</a></li>
              <li><a href="#works" onClick={() => setIsOpen(false)}>How It Works</a></li>
              <li><a href="#feel" onClick={() => setIsOpen(false)}>Benefits</a></li>
              <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
