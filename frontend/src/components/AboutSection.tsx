import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gradient-pearl"
    >
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-elegant text-4xl lg:text-5xl font-bold mb-6">
              About Our Studio
            </h2>
            <p className="text-body text-lg text-muted-foreground mb-6">
              With over a decade of experience in luxury interior design, we specialize in creating 
              sophisticated spaces that seamlessly blend functionality with timeless elegance. 
              Our award-winning team is dedicated to transforming your vision into reality.
            </p>
            <p className="text-body text-lg text-muted-foreground mb-8">
              From intimate residential projects to expansive commercial spaces, we approach each 
              design with meticulous attention to detail and a deep understanding of our clients' 
              unique lifestyle and aesthetic preferences.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "12+", label: "Years Experience" },
                { number: "25+", label: "Awards Won" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-elegant text-3xl font-bold text-primary mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-gradient-cream p-8 lg:p-12 rounded-lg shadow-elegant">
              <h3 className="text-elegant text-2xl font-semibold mb-6">Our Design Philosophy</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Timeless Elegance",
                    description: "Creating designs that transcend trends and remain beautiful for years to come."
                  },
                  {
                    title: "Functional Beauty", 
                    description: "Balancing aesthetic appeal with practical functionality for everyday living."
                  },
                  {
                    title: "Personal Expression",
                    description: "Reflecting each client's unique personality and lifestyle in every design decision."
                  }
                ].map((philosophy, index) => (
                  <motion.div 
                    key={philosophy.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                    <div>
                      <h4 className="font-semibold mb-2">{philosophy.title}</h4>
                      <p className="text-sm text-muted-foreground">{philosophy.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;