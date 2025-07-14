import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

import { default as event1, default as event2, default as event3, default as event4, default as event5 } from '../../assets/categories-image1.png';
import bgImage from '../../assets/leftIceCream.png'; // Left side decorative image

const events = [
  {
    title: 'Ice Cream Festival',
    date: 'Aug 15, 2025',
    image: event1,
    description: 'Sweet treats, games, and fun activities for all ages!',
  },
  {
    title: 'Summer Chill Party',
    date: 'Jul 28, 2025',
    image: event2,
    description:
      'Beat the heat with music and ice cream! Enjoy DJ performances, ice cream contests, dancing, and more.',
  },
  {
    title: 'Flavor Launch Night',
    date: 'Sep 10, 2025',
    image: event3,
    description:
      'Taste our brand-new seasonal flavors. Free samples, giveaways, and behind-the-scenes stories of our creations await!',
  },
  {
    title: 'Sundae Sunday',
    date: 'Oct 5, 2025',
    image: event4,
    description:
      'Create your own sundae with unlimited toppings! Great for kids and adults alike. Join us for the sweetest event.',
  },
  {
    title: 'Winter Cream Fest',
    date: 'Dec 1, 2025',
    image: event5,
    description:
      'Celebrate winter with our warm ice cream specials, cozy outdoor seating, hot chocolate pairings, and a bonfire night!',
  },
];

const EventSection = () => {
  const scrollRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const toggleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <div className="relative py-16 px-6 md:px-20 bg-white text-center overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50">
      {/* 🍦 Left Ice Cream Background */}
      <img
        src={bgImage}
        alt="Ice cream splash left"
        className="absolute left-0 top-[20%] transform -translate-y-1/2 w-[100px] hidden md:block"
      />

      {/* 🍦 Right Ice Cream Background */}
      <img
        src={bgImage}
        alt="Ice cream splash right"
        className="absolute right-0 bottom-[10%] w-[100px] hidden md:block"
      />
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 px-4 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Upcoming <span className="text-purple-500">Events</span>
        </h2>
        <p className="text-gray-500 mb-10">
          Stay updated with the latest events happening around our store.
        </p>

        {/* Scrollable Section with Arrows Positioned Outside */}
        <div className="relative">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-8 py-2"
          >
            {events.map((event, index) => {
              const isExpanded = expandedIndex === index;
              const shortDesc = event.description.slice(0, 60) + '...';

              return (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform text-left"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-purple-500 mt-1">{event.date}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      {isExpanded ? event.description : shortDesc}
                    </p>
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-purple-600 text-xs mt-1 underline focus:outline-none"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow - positioned vertically centered, outside */}
          <button
            onClick={() => scroll(-320)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-purple-100"
          >
            <ChevronLeft className="text-purple-500" />
          </button>

          {/* Right Arrow - positioned vertically centered, outside */}
          <button
            onClick={() => scroll(320)}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-purple-100"
          >
            <ChevronRight className="text-purple-500" />
          </button>
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow-md transition-transform hover:scale-105">
            View All Events →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
