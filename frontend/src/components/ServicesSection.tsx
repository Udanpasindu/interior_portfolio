import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Complete home interior design services from concept to completion, creating personalized living spaces that reflect your lifestyle.',
    icon: '🏠',
    features: ['Space Planning', 'Custom Furniture', 'Color Consultation', 'Lighting Design']
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    description: 'Professional design solutions for offices, restaurants, retail spaces, and hospitality venues that enhance brand identity.',
    icon: '🏢',
    features: ['Brand Integration', 'Workspace Design', 'Retail Layouts', 'Hospitality Design']
  },
  {
    id: 3,
    title: 'Design Consultation',
    description: 'Expert advice and guidance for your design projects, including style direction, material selection, and layout optimization.',
    icon: '💡',
    features: ['Style Guide Creation', 'Material Selection', 'Layout Planning', 'Budget Consultation']
  },
  {
    id: 4,
    title: 'Project Management',
    description: 'Full project coordination from initial concept through final installation, ensuring seamless execution of your design vision.',
    icon: '📋',
    features: ['Timeline Management', 'Vendor Coordination', 'Quality Control', 'Installation Oversight']
  }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-gradient-warm"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-elegant text-4xl lg:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive interior design services tailored to meet your unique needs 
            and exceed your expectations at every stage of the design process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-background rounded-lg p-8 shadow-elegant"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-elegant text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-body text-muted-foreground mb-6">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-primary mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-cool rounded-lg p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-elegant text-2xl font-semibold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-body text-muted-foreground mb-6">
              Let's discuss your vision and create a design solution that perfectly reflects your style and needs.
            </p>
            <motion.button 
              onClick={() => {
                const section = document.getElementById('contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-hover transition-all duration-elegant"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;