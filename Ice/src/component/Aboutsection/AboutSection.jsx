import iceCream1 from '../../assets/about1.png';
import iceCream2 from '../../assets/about2.png';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-100 to-yellow-50 py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-[400px] h-[400px]">
          <img
            src={iceCream1}
            alt="Ice Cream 1"
            className="w-full h-full object-cover rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
          />
          <img
            src={iceCream2}
            alt="Ice Cream 2"
            className="w-72 absolute -bottom-12 -right-12 rounded-xl shadow-lg border-4 border-white transform hover:scale-105 transition duration-300 z-10"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Mr. Whippy Vans <br /> we just love
          ice cream! <br />
          <span className="text-red-500">delicious stripey tubs of joy.</span>
        </h2>
        <p className="text-red-500 italic text-lg font-medium mb-3">Join the Mr. Whippy Vans vibe 🍦</p>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          We are the iconic, first and the original Mr Whippy Vans Australia. We are 100% Australian owned and family run for 3 generations. We serve gluten-free soft-serve ice cream with a great range of tasty flavors, topped with delicious goodies like chocolate, sprinkles, and much more. The quality and tasty flavour of our ice cream has not changed since those humble beginnings back in the late 1950s.
        </p>
        <ul className="space-y-3 text-gray-800 text-sm font-medium">
          {['Scoop Shop Flavors', 'Ice Cream Pints', 'Frozen Yogurt Pints', 'Chocolatey Love'].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-red-500 text-lg">🍨</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
