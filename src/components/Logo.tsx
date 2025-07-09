
import React from 'react';
import { Plane, MapPin, Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  textSize?: string;
}

const Logo = ({ className = "", textSize = "text-xl sm:text-2xl" }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Main logo container with gradient background */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-lg relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
          
          {/* Icon composition */}
          <div className="relative flex items-center justify-center">
            <Globe className="w-6 h-6 text-white/90 absolute" />
            <Plane className="w-4 h-4 text-white ml-1 mt-1 transform rotate-12" />
            <MapPin className="w-3 h-3 text-yellow-300 absolute -bottom-1 -right-1" />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="flex flex-col">
        <h1 className={`${textSize} font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight`}>
          Reserva Mi Reservas
        </h1>
        <p className="text-xs text-gray-500 font-medium tracking-wide">
          Viajes y Tours
        </p>
      </div>
    </div>
  );
};

export default Logo;
