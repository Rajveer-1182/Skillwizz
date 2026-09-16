"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Open / close mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-[#335f92] text-white rounded-b-3xl">
        <div className="flex items-center px-4 py-2">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center shrink-0 px-1 py-1"
            aria-label="SkillKwiz Home"
          >
            {/* Logo Icon */}
            <Image
              src="/images/logo.png"
              alt="SkillKwiz Logo"
              width={70}
              height={65}
              priority
              className="
                h-[48px]
                w-[55px]
                object-contain
                sm:h-[52px]
                sm:w-[60px]
                md:h-[56px]
                md:w-[65px]
              "
            />

            {/* SkillKwiz Text */}
            <div className="ml-2 flex flex-col justify-center leading-none">
              <span
                className="
                  text-[22px]
                  font-bold
                  tracking-wide
                  text-[#69226F]
                  sm:text-[24px]
                  md:text-[26px]
                "
              >
                SkillKwiz
              </span>

              <span
                className="
                  mt-1
                  text-[11px]
                  font-medium
                  text-black
                  sm:text-[12px]
                  md:text-[13px]
                "
              >
                How much do you know?
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="ml-auto md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">

            {/* Desktop Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className={`relative group py-4 px-2 text-sm lg:text-base md:px-4 transition-all ${
                pathname === "/"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <div className="relative flex items-center">
                <div className="w-auto h-10 flex items-center justify-start">
                  {/* <Image
                    src="/images/logo.png"
                    alt="SkillKwiz Logo"
                    width={100}
                    height={30}
                    className="w-auto h-auto max-h-12 object-contain"
                    style={{ maxWidth: "100%" }}
                  /> */}
                </div>
              </div>
            </Link>

            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              onClick={closeMenu}
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/about"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {/* Services */}
            <Link
              href="/services"
              onClick={closeMenu}
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={closeMenu}
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/blog"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl absolute top-0 left-0 w-full pt-16 shadow-lg transition-all duration-300 ease-in-out">

            {/* Home */}
            <Link
              href="/"
              className={`relative group py-3 text-lg w-full text-center ${
                pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
              onClick={closeMenu}
            >
              <span>Home</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`relative group py-3 text-lg w-full text-center ${
                pathname === "/about"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
              onClick={closeMenu}
            >
              <span>About Us</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {/* Services */}
            <Link
              href="/services"
              className={`relative group py-3 text-lg w-full text-center ${
                pathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
              onClick={closeMenu}
            >
              <span>Services</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`relative group py-3 text-lg w-full text-center ${
                pathname === "/blog"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
              onClick={closeMenu}
            >
              <span>Blog</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}