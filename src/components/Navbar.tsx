import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavItem, NavbarProps } from '../types/navigation';

/**
 * Professional Navbar component for Alem Asefa's counseling website
 * Features responsive design, accessibility, and clean styling
 */
const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items configuration
  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if current path matches nav item
  const isCurrentPage = (href: string): boolean => {
    return location.pathname === href;
  };

  // Toggle mobile menu
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white shadow-sm border-b border-primary-100 ${className}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold text-text hover:text-primary transition-colors duration-200"
              aria-label="Alem Asefa Counseling - Home"
            >
              Amra Counseling
              <span className="block text-sm font-normal text-text-light">
                Licensed Clinical Professional Counselor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isCurrentPage(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text hover:text-primary hover:border-b-2 hover:border-primary-300'
                  }`}
                  aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary text-sm lg:text-base"
              aria-label="Schedule your free 15-minute consultation"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="mobile-menu px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary border-t border-primary-100">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isCurrentPage(item.href)
                  ? 'text-primary bg-primary-50 border-l-4 border-primary'
                  : 'text-text hover:text-primary hover:bg-primary-50'
              }`}
              aria-current={isCurrentPage(item.href) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <div className="px-3 py-2 flex justify-center">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="btn-primary text-center text-xs px-4 py-2 min-w-0 w-auto"
              aria-label="Schedule your free 15-minute consultation"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
