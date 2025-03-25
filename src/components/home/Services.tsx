
import React from 'react';
import { Megaphone, Globe, PenTool, Smartphone, Film, BarChart3 } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Strategic online campaigns that drive traffic, leads and sales.',
      icon: Megaphone,
      features: [
        'SEO & SEM Campaigns',
        'Social Media Management',
        'Email Marketing',
        'PPC Advertising'
      ]
    },
    {
      title: 'Web Development',
      description: 'Custom websites and applications that convert visitors into customers.',
      icon: Globe,
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'CMS Development',
        'Web Applications'
      ]
    },
    {
      title: 'Graphic Design',
      description: 'Visually stunning designs that communicate your brand message.',
      icon: PenTool,
      features: [
        'Logo & Brand Identity',
        'Print & Digital Media',
        'Packaging Design',
        'Marketing Collateral'
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Innovative mobile applications for Android and iOS platforms.',
      icon: Smartphone,
      features: [
        'Native App Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization'
      ]
    },
    {
      title: 'Video Production',
      description: 'Engaging video content that tells your brand story.',
      icon: Film,
      features: [
        'Commercial Production',
        'Explainer Videos',
        'Motion Graphics',
        'Social Media Content'
      ]
    },
    {
      title: 'Brand Strategy',
      description: 'Comprehensive brand strategies that position you for success.',
      icon: BarChart3,
      features: [
        'Brand Positioning',
        'Market Research',
        'Competitive Analysis',
        'Growth Planning'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-promo-black z-[-2]"></div>
      
      {/* Gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-promo-darkgray to-transparent z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive marketing solutions tailored to elevate your brand in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
