import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-background py-16"
    >
      <div className="container mx-auto container-padding">
        <div className={`text-center mb-12 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-elegant text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Ready to transform your space? Get in touch with us to discuss your project 
            and discover how we can bring your vision to life.
          </p>
        </div>

        {/* Modified to take full width with increased size */}
        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-surface rounded-full p-1 shadow-sm">
              <button 
                onClick={() => setActiveTab('contact')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'contact' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                Contact Info
              </button>
              <button 
                onClick={() => setActiveTab('location')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'location' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                Our Location
              </button>
            </div>
          </div>

          {/* Contact Information Tab */}
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-ash p-10 rounded-xl shadow-elegant min-h-[500px]">
              
              {activeTab === 'contact' && (
                <div className="space-y-8">
                  <h3 className="text-elegant text-3xl font-semibold mb-8 font-serif border-b border-primary/20 pb-4">Get in Touch</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Phone</h4>
                        <p className="text-muted-foreground text-lg">+94768390973</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Email</h4>
                        <a href="mailto:modianointerior@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">modianointerior@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Address</h4>
                        <p className="text-muted-foreground text-lg">
                          4B 7/4<br />
                          National Housing Scheme <br/>
                          Mattegoda, Sri Lanka
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Open Hours</h4>
                        <p className="text-muted-foreground text-lg">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: By Appointment
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-border">
                    <h4 className="font-semibold mb-5 text-xl">Follow Us</h4>
                    <div className="flex space-x-5">
                      <a 
                        href="https://facebook.com/share/1YgGreSNMs/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300 hover:scale-110 shadow-md"
                      >
                        <Facebook className="w-6 h-6 text-primary-foreground" />
                      </a>
                      <a 
                        href="https://www.instagram.com/ni_modiano_interiors.lk?igsh=NnFneWlraTVoNDYz&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300 hover:scale-110 shadow-md"
                      >
                        <Instagram className="w-6 h-6 text-primary-foreground" />
                      </a>
                      <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300 hover:scale-110 shadow-md"
                      >
                        <Linkedin className="w-6 h-6 text-primary-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'location' && (
                <div className="space-y-6">
                  <h3 className="text-elegant text-3xl font-semibold mb-8 font-serif border-b border-primary/20 pb-4">Our Location</h3>
                  
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575540164534!2d79.93229999999999!3d6.82041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a7c6a87909d%3A0x605271aa130105a4!2sMattegoda%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1652452148567!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  <div className="bg-surface p-6 rounded-lg shadow-sm mt-6">
                    <h4 className="font-semibold text-lg mb-3">Getting Here</h4>
                    <p className="text-muted-foreground">
                      Located in the peaceful National Housing Scheme area of Mattegoda, 
                      our studio is easily accessible by public transport and by car. 
                      Parking is available on-site for our clients.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form - still commented out */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;