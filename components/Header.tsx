"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-t-4 border-brand-red">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/en" className="flex items-center group">
            <div className="relative -translate-y-2 transition-transform group-hover:scale-105 duration-300">
              <Image 
                src="/images/Logo.png" 
                alt="Park Patch & Paint Logo" 
                width={80} 
                height={80} 
                className="mr-3"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-2xl font-bold text-brand-blue self-center group-hover:text-brand-red transition-colors duration-300">
              Park Patch & Paint
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-brand-blue focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/en" className="text-brand-blue hover:text-brand-red transition-colors font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/en/services" className="text-brand-blue hover:text-brand-red transition-colors font-medium relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/en/about" className="text-brand-blue hover:text-brand-red transition-colors font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/en/contact" className="text-brand-blue hover:text-brand-red transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/en/contact" className="btn-primary shadow-lg transform hover:scale-105 transition-all">
              Get Quote
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 bg-gray-50 p-4 rounded-lg animate-fadeIn border-l-4 border-brand-blue">
            <Link href="/en" className="text-brand-blue hover:text-brand-red transition-colors font-medium p-2 hover:bg-white rounded">
              Home
            </Link>
            <Link href="/en/services" className="text-brand-blue hover:text-brand-red transition-colors font-medium p-2 hover:bg-white rounded">
              Services
            </Link>
            <Link href="/en/about" className="text-brand-blue hover:text-brand-red transition-colors font-medium p-2 hover:bg-white rounded">
              About
            </Link>
            <Link href="/en/contact" className="text-brand-blue hover:text-brand-red transition-colors font-medium p-2 hover:bg-white rounded">
              Contact
            </Link>
            <Link href="/en/contact" className="btn-primary text-center">
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 