import leftIceCream from "../../assets/leftIceCream.png"; // cartoon-style ice cream
import rightCone from "../../assets/rightCone.png"; // realistic ice cream
import "../../index.css"; // for custom animations

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-50 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* 🍦 Left Background Ice Cream (faint, rotated) */}
            <img
                src={leftIceCream}
                alt="Ice Cream Background"
                className="absolute top-10 left-[-60px] w-[200px] md:w-[280px] opacity-20 rotate-[25deg] pointer-events-none select-none z-0"
            />

            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left z-10 relative">
                <img
                    src={leftIceCream}
                    alt="Cartoon Ice Cream"
                    className="h-20 md:h-24 w-auto mx-auto md:mx-0 mb-4"
                />
                <h4 className="text-md text-purple-600 mb-2">Welcome to The</h4>
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug">
                    Discover <span className="text-pink-500">Sweet</span> Delights!
                </h1>
                <p className="text-sm text-gray-600 mt-3 max-w-sm mx-auto md:mx-0">
                    Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.
                </p>
                <button className="mt-5 bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-2 rounded-full shadow-lg transition duration-300">
                    🍨 Browse Flavors →
                </button>
            </div>

            {/* Right Ice Cream Cone with Background Circle */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center relative z-10">
                {/* 🟠 Gradient Circle Behind Cone */}
                <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] bg-gradient-to-b from-white via-gray-100 to-gray-300 rounded-full z-0 shadow-inner drop-shadow-md"></div>

                {/* 🍦 Ice Cream Cone */}
                <img
                    src={rightCone}
                    alt="Ice Cream Cone"
                    className="w-[240px] md:w-[300px] relative z-10 -rotate-[35deg] animate-drop"
                />
            </div>
        </section>
    );
};

export default HeroSection;
