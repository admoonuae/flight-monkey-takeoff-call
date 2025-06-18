
import React from 'react';

interface LocationCardProps {
  image: string;
  title: string;
  description: string;
}

const LocationCard = ({ image, title, description }: LocationCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl h-80 shadow-xl">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90 leading-relaxed">{description}</p>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default LocationCard;
