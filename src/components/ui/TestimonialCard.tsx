
import React from 'react';
import { StarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  rating, 
  avatarUrl,
  className,
  style
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 h-full flex flex-col",
      className
    )}
    style={style}>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={cn(
              "h-4 w-4 mr-1", 
              i < rating ? "text-promo-red fill-promo-red" : "text-muted-foreground"
            )} 
          />
        ))}
      </div>
      
      <blockquote className="text-sm text-muted-foreground italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-promo-lightgray flex items-center justify-center mr-3">
          {avatarUrl ? (
            <img src={avatarUrl} alt={author} className="h-full w-full object-cover" />
          ) : (
            <span className="text-lg font-bold">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-bold text-sm">{author}</h4>
          <p className="text-xs text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
