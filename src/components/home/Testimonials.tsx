
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    
    {
      quote: "Working with Promo Mitra transformed our brand presence. Their strategic approach to digital marketing helped us increase our online visibility and customer engagement significantly.",
      author: "Mukesh",
      role: "Bussiness Developer",
      company: "Invesment Duniya",
      rating: 5
    },
    {
      quote: "The website they designed for us not only looks stunning but has dramatically improved our conversion rates. Their team was responsive, professional, and delivered beyond our expectations.",
      author: "suranjan Debbarma",
      role: "CEO",
      company: "chakraborty clinic",
      rating: 5
    },
    {
      quote: "Promo Mitra's social media management has been a game-changer for our brand. They truly understand our audience and create content that resonates and drives engagement.",
      author: "Soumyajit",
      role: "Founder",
      company: "Dawat",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-promo-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-promo-darkgray/50 to-promo-black z-[0]"></div>
      
      <div className="container mx-auto px-4 relative z-[1]">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card inline-block rounded-full px-6 py-3 mx-auto">
            <p className="text-sm text-muted-foreground">
              Join over <span className="text-white font-bold">150+ satisfied clients</span> who trust Promo Mitra with their marketing needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
