
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast notification
    setTimeout(() => {
      toast({
        title: "Welcome to Promo Mitra",
        description: "Your one-stop marketing agency for brand success.",
        duration: 5000,
      });
    }, 2000);
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
