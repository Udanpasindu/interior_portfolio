import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-elegant text-2xl font-bold mb-4">Modiano Interior</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Creating timeless, elegant interiors that reflect your unique style and elevate your lifestyle through sophisticated design solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors duration-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/ni_modiano_interiors.lk?igsh=NnFneWlraTVoNDYz&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors duration-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors duration-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('home');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('about');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-smooth"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('portfolio');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-smooth"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('services');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-smooth"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>4B 7/4 National Housing Scheme <br />
              Mattegoda, Sri Lanka</p>
              <p>+94 768390973</p>
              <a href="mailto:modianointerior@gmail.com" className="hover:text-primary-foreground transition-colors">modianointerior@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Modiano Interior. All rights reserved. Crafted with passion for exceptional design.<br />
            <br />
            ©UdanPasinduJayasekara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;