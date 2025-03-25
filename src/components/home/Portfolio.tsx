
import React, { useState } from 'react';
import PortfolioItem from '../ui/PortfolioItem';

// Portfolio categories
const categories = ['All', 'Branding', 'Web Design', 'Marketing', 'Social Media'];

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'realty advertising',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Social Media Content',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Restaurant Branding',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Tech Startup Website',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-promo-darkgray relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our latest projects and see how we've helped brands achieve their marketing goals.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-promo-red text-white'
                  : 'bg-promo-lightgray/30 text-muted-foreground hover:bg-promo-lightgray'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
