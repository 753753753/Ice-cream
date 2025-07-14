import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import bgImage from '../../assets/leftIceCream.png'; // Left side decorative image
import logo from '../../assets/logo.png'; // Replace with your actual logo path

const FooterSection = () => {
  return (
    <footer className="relative bg-purple-700 text-white px-6 md:px-20 py-12">
      {/* Background image on the left */}
      <img
        src={bgImage}
        alt="Decorative Ice Cream"
        className="absolute bottom-0 left-0 h-full max-h-[280px] object-contain opacity-60 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="IcyTales Logo" className="h-10 w-10" />
            <h2 className="text-2xl font-semibold">
              <span className="text-pink-400">Mr. Whispy Vans</span> <br />
              <span className="text-white-400">Australia</span>
            </h2>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-3">Navigation</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>• Home</li>
            <li>• About Us</li>
            <li>• Menu</li>
            <li>• Event</li>
            <li>• Contact Us</li>
          </ul>
        </div>

        {/* Address & Email */}
        <div className="text-sm text-gray-200 space-y-4">
          <div className="flex items-start gap-3">
            <HiLocationMarker size={22} className="text-white mt-1" />
            <div>
              <p className="font-semibold text-white">Address:</p>
              <p>725-727 Old Gympie Road
                Narangba 4504
                Queensland </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdEmail size={20} className="text-white mt-1" />
            <div>
              <p className="font-semibold text-white">Email:</p>
              <p>mrwhippyvans1@yahoo.com</p>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-4 text-sm text-gray-200">
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={18} className="text-white" />
            <div>
              <p className="font-semibold text-white">0405233635</p>
              <p>Hours: Mon-Fri 7:00AM - 8:00PM</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <button className="bg-purple-600 hover:bg-pink-500 p-2 rounded-full transition">
              <FaFacebookF size={16} />
            </button>
            <button className="bg-purple-600 hover:bg-pink-500 p-2 rounded-full transition">
              <FaInstagram size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-purple-600 pt-4 text-center text-sm text-gray-300">
        Copyright © 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
