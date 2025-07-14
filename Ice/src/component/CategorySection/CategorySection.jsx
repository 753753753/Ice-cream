import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

import sundaeImg from '../../assets/categories-image1.png';
import coneImg from '../../assets/categories-image2.png';
import milkshakeImg from '../../assets/categories-image3.png';
import seasonalImg from '../../assets/categories-image4.png';

import backgroundImageLeft from '../../assets/classic-leftimage.png'; // crop left-side part
import backgroundImageRight from '../../assets/classic-rightimage.png'; // crop right-side part

const categories = [
    {
        title: 'Sundaes',
        image: sundaeImg,
        price: '$4.99',
        description: 'Classic sundaes topped with syrup and sprinkles.',
    },
    {
        title: 'Ice Cream Cones',
        image: coneImg,
        price: '$2.99',
        description: 'Crispy cones filled with creamy scoops.',
    },
    {
        title: 'Milkshakes',
        image: milkshakeImg,
        price: '$3.49',
        description: 'Thick and creamy milkshakes in various flavors.',
    },
    {
        title: 'Seasonal Flavors',
        image: seasonalImg,
        price: '$5.49',
        description: 'Limited-time flavors that match the season.',
    },
    {
        title: 'Sundaes',
        image: sundaeImg,
        price: '$4.99',
        description: 'Classic sundaes topped with syrup and sprinkles.',
    },
    {
        title: 'Ice Cream Cones',
        image: coneImg,
        price: '$2.99',
        description: 'Crispy cones filled with creamy scoops.',
    },
    {
        title: 'Milkshakes',
        image: milkshakeImg,
        price: '$3.49',
        description: 'Thick and creamy milkshakes in various flavors.',
    },
    {
        title: 'Seasonal Flavors',
        image: seasonalImg,
        price: '$5.49',
        description: 'Limited-time flavors that match the season.',
    },
];

const CategorySection = () => {
    const scrollRef = useRef(null);

    const scroll = (offset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (

        <div className="relative py-16 px-6 md:px-20 bg-white text-center overflow-hidden">
            {/* 🍦 Left Ice Cream Background */}
            <img
                src={backgroundImageLeft}
                alt="Ice cream splash left"
                className="absolute left-0 top-[20%] transform -translate-y-1/2 w-[100px] hidden md:block"
            />

            {/* 🍦 Right Ice Cream Background */}
            <img
                src={backgroundImageRight}
                alt="Ice cream splash right"
                className="absolute right-0 bottom-[10%] w-[100px] hidden md:block"
            />

            {/* ... rest of your code ... */}
            <div className="py-16 px-6 md:px-20 bg-white text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                    Explore Our <span className="text-pink-500">Categories</span>
                </h2>
                <p className="text-gray-500 mb-10">
                    Browse through our delightful selections and find your favorite treat.
                </p>

                {/* Scrollable Cards with Arrows */}
                <div className="relative flex items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll(-300)}
                        className="z-10 bg-white shadow-md p-2 rounded-full hover:bg-pink-100 -ml-4"
                    >
                        <ChevronLeft className="text-pink-500" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth py-2 px-10"
                    >
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 min-w-[250px] max-w-[250px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-left">
                                    <h3 className="font-bold text-lg text-gray-800">{cat.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-pink-500 font-semibold text-base">{cat.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll(300)}
                        className="z-10 bg-white shadow-md p-2 rounded-full hover:bg-pink-100 -mr-4"
                    >
                        <ChevronRight className="text-pink-500" />
                    </button>
                </div>

                {/* View More Button */}
                <div className="mt-12">
                    <button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow-md transition-transform hover:scale-105">
                        View More Categories →
                    </button>
                </div>
            </div>
        </div>

    );
};

export default CategorySection;
