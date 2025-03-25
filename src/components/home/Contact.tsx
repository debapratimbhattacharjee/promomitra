
import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: 'Email Us', info: 'promomitra24@gmail.com', description: 'For general inquiries and information' },
    { icon: Phone, title: 'Call Us', info: '+91 9862683512', description: 'Mon-Fri from 9am to 6pm' },
    { icon: MapPin, title: 'Visit Us', info: 'Agartala,Tripura, India', description: 'By appointment only' },
  ];

  return (
    <section id="contact" className="py-20 bg-promo-darkgray relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to elevate your brand? Reach out to us for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-promo-red rounded-full p-3 mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-promo-red font-medium mb-2">{item.info}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-promo-lightgray border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-promo-red text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-promo-lightgray border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-promo-red text-white"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-promo-lightgray border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-promo-red text-white"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-promo-lightgray border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-promo-red text-white"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>
                
                <Button className="bg-promo-red hover:bg-promo-red/90 text-white px-6 py-6 w-full sm:w-auto button-glow">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="relative hidden lg:block">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-promo-darkgray via-promo-darkgray/95 to-transparent"></div>
              
              <div className="relative h-full p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
                <p className="text-muted-foreground mb-8">
                  Schedule a free 30-minute consultation with our marketing experts to discuss your business goals.
                </p>
                
                <div className="glass-card rounded-xl p-6 mb-8">
                  <h4 className="font-bold mb-4">Why Choose Promo Mitra?</h4>
                  <ul className="space-y-3">
                    {[
                      'Tailored marketing strategies for your business',
                      'Transparent pricing with no hidden fees',
                      'Regular reports and performance updates',
                      'Dedicated account manager for your project'
                    ].map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-promo-red mr-2 mt-1" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="bg-transparent border border-promo-red text-promo-red hover:bg-promo-red hover:text-white transition-colors duration-300">
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
