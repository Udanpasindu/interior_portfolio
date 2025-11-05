import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import kitchenImage from '@/assets/portfolio-kitchen.jpg';
import bedroomImage from '@/assets/portfolio-bedroom.jpg';
import diningImage from '@/assets/portfolio-dining.jpg';
import bathroomImage from '@/assets/portfolio-bathroom.jpg';
import officeImage from '@/assets/portfolio-office.jpg';
import livingRoomImage from '@/assets/portfolio-living-room.jpg';
import closetImage from '@/assets/portfolio-closet.jpg';
import spaBathroomImage from '@/assets/portfolio-spa-bathroom.jpg';
import libraryImage from '@/assets/portfolio-library.jpg';
import Rainy from '@/assets/portfolio-1_Rainy.jpg';
import sunset from '@/assets/portfolio-1_Sunset.jpg';
import Couch from '@/assets/portfolio-1Aerial_RT.jpg';
import Couch2 from '@/assets/portfolio-1_Photo - 6.jpg';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Kitchen Design',
    category: 'Kitchen',
    image: kitchenImage,
    description: 'A sleek and functional kitchen featuring clean lines and premium finishes.',
    background: 'bg-white'
  },
  {
    id: 2,
    title: 'Elegant Master Bedroom',
    category: 'Bedroom',
    image: bedroomImage,
    description: 'Sophisticated bedroom design with luxurious textures and calming tones.',
    background: 'bg-gray-50'
  },
  {
    id: 3,
    title: 'Contemporary Dining Room',
    category: 'Dining',
    image: diningImage,
    description: 'Stylish dining space perfect for entertaining and family gatherings.',
    background: 'bg-blue-50'
  },
  {
    id: 4,
    title: 'Luxury Bathroom Suite',
    category: 'Bathroom',
    image: bathroomImage,
    description: 'Spa-inspired bathroom with premium materials and elegant fixtures.',
    background: 'bg-green-50'
  },
  {
    id: 5,
    title: 'Executive Home Office',
    category: 'Office',
    image: officeImage,
    description: 'Professional workspace designed for productivity and inspiration.',
    background: 'bg-yellow-50'
  },
  {
    id: 6,
    title: 'Sophisticated Living Room',
    category: 'Living Room',
    image: livingRoomImage,
    description: 'Elegant living space with modern luxury and timeless appeal.',
    background: 'bg-purple-50'
  },
  {
    id: 7,
    title: 'Designer Walk-in Closet',
    category: 'Closet',
    image: closetImage,
    description: 'Organized luxury storage with sophisticated design elements.',
    background: 'bg-pink-50'
  },
  {
    id: 8,
    title: 'Spa Master Bathroom',
    category: 'Bathroom',
    image: spaBathroomImage,
    description: 'Resort-style bathroom with calming aesthetics and premium fixtures.',
    background: 'bg-indigo-50'
  },
  {
    id: 9,
    title: 'Home Library & Reading Nook',
    category: 'Library',
    image: libraryImage,
    description: 'Tranquil reading space with custom built-ins and natural lighting.',
    background: 'bg-gray-100'
  },
  {
    id: 10,
    title: 'Home Living Area',
    category: 'Living Area',
    image: Rainy,
    description: 'With couch living area',
    background: 'bg-slate-50'
  },
  {
    id: 11,
    title: 'Home Dining Area',
    category: 'Dining',
    image: sunset,
    description: 'Dining Table with elegant design.',
    background: 'bg-stone-50'
  },
  {
    id: 12,
    title: 'Home Couch',
    category: 'Living Area',
    image: Couch,
    description: 'Living Area with rustic charm.',
    background: 'bg-zinc-50'
  },
  {
    id: 13,
    title: 'Home Living Area',
    category: 'Living Area',
    image: Couch2,
    description: 'Living Area with cozy seating and warm lighting.',
    background: 'bg-neutral-50'
  }
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Kitchen', 'Bedroom', 'Dining', 'Bathroom', 'Office', 'Living Room', 'Closet', 'Library', 'Living Area'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 bg-gray-50 min-h-screen portfolio-visible"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover our collection of carefully crafted interiors, each telling a unique story 
            of style, functionality, and timeless elegance.
          </p>
        </motion.div>

        {/* Filter Buttons - Mobile Optimized */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 px-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`px-3 py-2 sm:px-4 md:px-6 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group w-full"
            >
              <div className={`${item.background} p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div className="text-white">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;