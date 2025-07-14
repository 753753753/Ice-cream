import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; // Optional logo

export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Left: Logo */}
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 w-14 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-center sm:text-left leading-tight">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 tracking-wide">
                            Mr. Whispy Vans
                        </h1>
                        <p className="text-sm sm:text-base text-pink-500 italic tracking-wide">
                            Australia
                        </p>
                    </div>
                </div>



                {/* Middle: Menu */}
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

                {/* Right: Follow Us */}
                <div className="hidden md:flex items-center gap-3 text-sm text-gray-700">
                    <span className="font-medium">Follow Us:</span>
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer transition duration-200" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer transition duration-200" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-200" />
                </div>
            </div>
        </header>
    );
}
