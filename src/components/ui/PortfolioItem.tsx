
import React, { useState } from 'react';
import { ExternalLink, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const PortfolioItem = ({ title, category, imageUrl, className }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-xl aspect-square", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-promo-black to-transparent opacity-60",
        isHovered ? "opacity-90" : "opacity-60",
        "transition-opacity duration-300"
      )} />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex items-center justify-between">
          <div>
            <span className="block text-promo-red text-sm font-medium mb-2">{category}</span>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <button 
            className={cn(
              "w-10 h-10 rounded-full bg-promo-red flex items-center justify-center transition-all duration-300",
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            <Plus className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 bg-promo-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300 p-6",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center max-w-xs">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            An impressive project showcasing our expertise in {category.toLowerCase()}, delivering exceptional results for our client.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-promo-red hover:text-white transition-colors"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
