
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  color = 'bg-promo-red',
  className,
  style
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 h-full flex flex-col transition-transform duration-500 hover:translate-y-[-8px]",
        className
      )}
      style={style}
    >
      <div className={cn("p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-5", color)}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5">{description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="h-1.5 w-1.5 rounded-full bg-promo-red mt-1.5 mr-2"></div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant="outline" 
        className="mt-auto w-full border-promo-red text-promo-red hover:bg-promo-red hover:text-white transition-all duration-300"
      >
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;
