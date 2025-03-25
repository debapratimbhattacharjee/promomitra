
import React from 'react';
import { ChevronRight, MousePointer, PenTool, BarChart3, Megaphone, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const brandFeatures = [
    { icon: PenTool, text: 'Creative Design' },
    { icon: MousePointer, text: 'Digital Marketing' },
    { icon: BarChart3, text: 'Growth Strategy' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-promo-black z-[-2]"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-[-20%] right-[-10%] h-[50vh] w-[50vh] rounded-full bg-promo-red/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-30%] left-[-15%] h-[70vh] w-[70vh] rounded-full bg-promo-red/10 blur-[150px] animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="text-sm text-muted-foreground">Apka Marketing Mitra</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your <span className="text-promo-red text-glow">Brand</span> To New Heights
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              We create powerful marketing strategies that connect your brand with your audience and drive exceptional growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button 
                className="bg-promo-red hover:bg-promo-red/90 text-white px-8 py-6 rounded-lg button-glow"
                onClick={scrollToContact}
              >
                Contact Us <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white py-6 px-8 rounded-lg">
                Our Portfolio
              </Button>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                {brandFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-promo-red/10 p-2 rounded-full mr-2">
                      <feature.icon className="h-4 w-4 text-promo-red" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden glass-card">
              {/* Marketing logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48 rounded-full bg-promo-red flex items-center justify-center animate-float">
                  <div className="flex flex-col items-center justify-center">
                    <Megaphone className="h-20 w-20 text-white mb-2" />
                    <TrendingUp className="h-10 w-10 text-white" />
                    <Target className="h-16 w-16 text-white absolute -right-4 -top-4 opacity-75" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-[-20px] right-[-20px] h-32 w-32 rounded-full bg-promo-red/20 blur-xl"></div>
              <div className="absolute bottom-[-30px] left-[-30px] h-40 w-40 rounded-full bg-promo-red/10 blur-xl"></div>
            </div>
            
            {/* Stats blocks */}
            <div className="absolute top-10 -left-10 glass-card rounded-lg p-4 shadow-lg animate-fade-in-left">
              <p className="text-xs text-muted-foreground">Successful Projects</p>
              <p className="text-2xl font-bold text-promo-red">150+</p>
            </div>
            
            <div className="absolute bottom-10 -right-10 glass-card rounded-lg p-4 shadow-lg animate-fade-in-right">
              <p className="text-xs text-muted-foreground">Happy Clients</p>
              <p className="text-2xl font-bold text-promo-red">92%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
