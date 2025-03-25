
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-promo-darkgray border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="">
              <img 
              src="/logo.png" 
              alt="Promo Mitra Logo" 
              
              className="h-14 w-14 object-contain "
            />
                
              </div>
              <span className="ml-2 text-xl font-display font-bold">Promo Mitra</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A full-service marketing agency providing branding, web development, and growth strategies for businesses of all sizes.
            </p>
            <div className="flex space-x-4 mt-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="bg-promo-lightgray p-2 rounded-full hover:bg-promo-red transition-colors duration-300"
                  aria-label="Social media"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Digital Marketing', 
                'Web Development', 
                'Graphic Design', 
                'Content Creation', 
                'Brand Strategy'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'promomitra24@gmail.com' },
                { icon: Phone, text: '+91 9862683512' },
                { icon: MapPin, text: 'Agartala,Tripura,India' }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 text-promo-red mt-0.5 mr-2" />
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Promo Mitra. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-promo-lightgray hover:bg-promo-red border-none"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
