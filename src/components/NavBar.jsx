"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
// Import your new product data
import { productCategories, otherProducts } from "@/app/data/products";

// Updated navLinks to handle dropdowns more cleanly
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  {
    label: "Categories",
    subLinks: productCategories, // Use imported data
  },
  {
    label: "Other Products",
    subLinks: otherProducts, // Use imported data
  },
  { href: "/contact-us", label: "Contact Us" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (label) => {
    if (openDropdown === label) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(label);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-3 md:py-5 fixed z-30 transition-colors duration-300 ${
        hasScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-8 gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center filter drop-shadow-[3px_3px_3px_rgba(0,0,0,0.1)]">
          <Link href="/" className="font-logo text-6xl">
            <Image
              src="/assets/epe.png"
              alt="Energy Process Equipments (EPE)"
              height={120}
              width={360}
              className="h-8 md:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-12 mt-6">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  <Link
                    href={"/all-products"}
                    className="flex items-center cursor-pointer"
                  >
                    <span
                      className={`font-medium uppercase tracking-wider group-hover:text-[#DC2621] transition-colors duration-300 ${
                        hasScrolled ? "text-black" : "text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                    <FiChevronDown
                      className={`ml-1 h-4 w-4 transition-colors duration-300 group-hover:text-[#DC2621] ${
                        hasScrolled ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible z-40">
                    <div className="bg-white shadow-lg rounded-md">
                      <ul className="py-1">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.label}>
                            <Link
                              href={subLink.href}
                              className="block px-5 py-2 text-gray-800 hover:bg-[#DC2621] hover:text-white whitespace-nowrap"
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`font-medium uppercase tracking-wider hover:text-[#DC2621] transition-colors duration-300 ${
                    hasScrolled ? "text-black" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Burger Icon & Mobile Menu... */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <FiMenu
              className={`h-6 w-6 mt-4 ${
                hasScrolled ? "text-black" : "text-[#DC2621]"
              }`}
            />
          </button>
        </div>
        <div
          className={`lg:hidden fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <FiX className="h-8 w-8 text-white bg-[#DC2621] rounded-full p-2" />
            </button>
          </div>
          <ul className="flex flex-col gap-4 mt-4 md:mt-8 px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.subLinks ? (
                  <div>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => handleDropdown(link.label)}
                    >
                      <span className="font-medium uppercase tracking-wider text-gray-600 hover:text-black transition-colors duration-300">
                        {link.label}
                      </span>
                      <FiChevronDown
                        className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openDropdown === link.label && (
                      <ul className="pl-4 mt-2">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.label} className="py-2">
                            <Link
                              href={subLink.href}
                              className="font-medium tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
                              onClick={toggleMenu}
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="font-medium uppercase tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;