
import React from 'react';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Check, 
  Award, 
  Clock, 
  Shield, 
  HeartHandshake 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
  ];

  const values = [
    { icon: Target, title: 'Goal-Oriented', description: 'We focus on achieving measurable results for your business.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new ideas and creative solutions to challenges.' },
    { icon: Users, title: 'Collaboration', description: 'We work as partners with our clients, not just service providers.' },
    { icon: HeartHandshake, title: 'Integrity', description: 'We maintain the highest ethical standards in all we do.' },
  ];

  return (
    <section id="about" className="py-20 bg-promo-black relative">
      {/* Gradient effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-promo-darkgray to-transparent z-[0]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-5 z-[1]"></div>
      
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="text-sm text-muted-foreground">About Promo Mitra</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Help Brands <span className="text-promo-red">Scale & Succeed</span> in the Digital Age
            </h2>
            
            <p className="text-muted-foreground mb-6">
            Promo Mitra is a full-service marketing agency helping businesses grow with smart, result-driven marketing. Since 2024, we’ve supported brands in building a solid online presence and reaching their audience effectively.</p>
            
            <div className="space-y-4 mb-8">
              {[
                'Tailored marketing strategies for your business goals',
                'Expert team with specialized industry knowledge',
                'Data-driven approach to maximize ROI',
                'Transparent communication throughout the process'
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-promo-red rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-promo-red hover:bg-promo-red/90 text-white button-glow">
              Learn More About Us
            </Button>
          </div>
          
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-promo-red mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 flex">
                    <div className="bg-promo-red/10 p-2 rounded-lg mr-3">
                      <value.icon className="h-5 w-5 text-promo-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
