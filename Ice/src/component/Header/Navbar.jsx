import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/logo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Left: Logo */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3">
    <img
        src={logo}
        alt="Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
    />
    <div className="text-center sm:text-left leading-tight">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-red-600 tracking-wide">
            Mr. Whispy Vans
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-pink-500 italic tracking-wide">
            Australia
        </p>
    </div>
</div>


                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                    {["Home", "About Us", "Menu", "Events", "Contact Us"].map((item) => (
                        <li
                            key={item}
                            className="relative group cursor-pointer hover:text-pink-600 transition-all duration-200"
                        >
                            {item}
                            {["Home", "Menu", "Events"].includes(item) && (
                                <span className="ml-1">▾</span>
                            )}
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block top-full left-0 bg-white border shadow-xl rounded-md mt-2 p-3 z-20 min-w-[160px]">
                                <p className="text-sm text-gray-500">Coming Soon...</p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Desktop Right Section: Social Icons */}
                <div className="hidden md:flex items-center gap-3 text-sm text-gray-700">
                    <span className="font-medium">Follow Us:</span>
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer transition duration-200" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer transition duration-200" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-200" />
                </div>

                {/* Mobile menu toggle button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
                        {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-4">
                    {["Home", "About Us", "Menu", "Events", "Contact Us"].map((item) => (
                        <div
                            key={item}
                            className="text-gray-700 font-medium hover:text-pink-600 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                    <div className="flex items-center gap-4 pt-2 text-gray-700">
                        <span className="font-medium">Follow Us:</span>
                        <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                    </div>
                </div>
            )}
        </header>
    );
}
