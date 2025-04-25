import React from 'react';
import {
  ChevronRight,
  MousePointer,
  PenTool,
  BarChart3,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '@/../public/promo-animation.json'; // adjust path if needed

// Separated PromoAnimation Component
const PromoAnimation = () => {
  return (
    <motion.div
  animate={{ scale: [1, 1.05, 1] }} // zoom in and out
  transition={{
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
  }}
    className="flex justify-center items-center"
  >
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="h-80 w-80 md:h-96 md:w-96"
    />
  </motion.div>
);
};

// Main Hero Section
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
      {/* Background Layer */}
      <div className="absolute inset-0 bg-promo-black z-[-2]" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-[-20%] right-[-10%] h-[50vh] w-[50vh] rounded-full bg-promo-red/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-30%] left-[-15%] h-[70vh] w-[70vh] rounded-full bg-promo-red/10 blur-[150px] animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
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

          {/* Right Side Animation */}
          <PromoAnimation />
        </div>

        {/* Stats Overlay Cards */}
        
      </div>
    </section>
  );
};

export default Hero;
